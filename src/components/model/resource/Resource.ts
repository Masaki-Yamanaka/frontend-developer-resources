import { useEffect, useState, useContext, useCallback } from 'react'
import { createCategoryData, fetchCategories } from '@/src/components/api/category'
import {
  fetchResources,
  deleteResourceData,
  createResourceUserData,
  deleteResourceUserData,
  createResourceData,
  fetchResourcesSortByTitle,
} from '@/src/components/api/resource'
import { updateAuthUser } from '@/src/components/api/auth'
import { useModal } from '@/src/components/hooks/useModal'
import _ from 'lodash'
import { AuthContext } from '@/src/components/model/auth'
import {
  UpdateResourceInput,
  Resource,
  ResourceType,
  ModelSortDirection,
  ModelResourceFilterInput,
} from '@/src/API'
import { CategoryType } from '@/src/types/index'
import { useSpreadsheet } from '@/src/components/api/spreadsheet'
import { useCurrentUser } from '@/src/components/hooks/useCurrentUser'
import { ResourceCountContext } from '@/src/components/model/resource/ResourceCount'
import { SelectChangeEvent } from '@mui/material/Select'

export const useResource = () => {
  const { isOpen, openModal } = useModal()
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [categories, setCategories] = useState<CategoryType[]>([])
  const [editItem, setEditItem] = useState<UpdateResourceInput>()
  const [resources, setResources] = useState<Resource[]>([])
  const { updateCurrentUser } = useContext(AuthContext)
  const { updateResourceCount, allResourceCount } = useContext(ResourceCountContext)

  const { currentUser } = useCurrentUser()
  const [sortQuery, setSortQuery] = useState<string>('createdAtDESC')
  const [filterQuery, setFilterQuery] = useState<ModelResourceFilterInput | undefined>(undefined)

  const createCategory = async (name: string) => {
    return await createCategoryData(name)
  }
  const { fetchCategoriesFromSpreadsheet, fetchResourceFromSpreadsheet } = useSpreadsheet()
  useEffect(() => {
    ;(async () => {
      setIsLoading(true)
      try {
        console.log('aaaa')
        const fetchCategoriesData = await fetchCategories()
        if (!fetchCategoriesData) return
        const categoryItems = [...fetchCategoriesData]
        if (!fetchCategoriesData.length) {
          // ?????????????????????????????????????????????????????????????????????????????????????????????????????????????????????Dynamo????????????
          const categoriesArray = await createInitializeCategory()
          await createInitializeResource(categoriesArray)
          return
        }
        const makeCategoriesData = categoryItems?.map((categoryItem) => ({
          id: categoryItem.id,
          name: categoryItem.name,
        }))
        setCategories(makeCategoriesData)
        fetchResourcesWithSort('createdAtDESC', undefined)
        handleSetAllResourceCount()
      } catch (error) {
        console.log(error)
      } finally {
        setIsLoading(false)
      }
    })()
  }, [])

  // NOTE: ???????????????????????????currentUser???undefined???????????????resources.length???????????????0??????????????????????????????useEffect???currentUser???undefined?????????????????????????????????????????????????????????????????????
  // currentUser???????????????????????????????????????allResourceCount??????????????????????????????????????????
  const handleSetAllResourceCount = useCallback((): void => {
    if (sortQuery === 'createdAtDESC' && !filterQuery) {
      updateResourceCount(resources.length)
    }
  }, [filterQuery, sortQuery, resources, updateResourceCount])

  useEffect(() => {
    if (!currentUser) {
      return setIsLoading(true)
    } else {
      setIsLoading(false)
      handleSetAllResourceCount()
    }
  }, [currentUser, handleSetAllResourceCount])

  const createInitializeCategory = async () => {
    try {
      const fetchCategories = await fetchCategoriesFromSpreadsheet()
      if (!fetchCategories) return
      const categoriesArray = []
      for await (const fetchCategory of fetchCategories) {
        try {
          const res = await createCategory(fetchCategory)
          if (!res?.data?.createCategory?.id || !res?.data?.createCategory.name) return
          categoriesArray.push({
            id: res?.data?.createCategory.id,
            name: res?.data?.createCategory.name,
          })
        } catch (error) {
          console.error(error)
        }
      }
      setCategories(categoriesArray)
      return categoriesArray
    } catch (error) {
      console.error(error)
    }
  }
  const createInitializeResource = async (categoriesArray: CategoryType[] | undefined) => {
    try {
      const fetchResources = await fetchResourceFromSpreadsheet()
      if (!fetchResources) return
      const userId = currentUser?.getUser?.id as string
      const resourcesArray = []
      for await (const fetchResource of fetchResources) {
        if (!getCategoryId(categoriesArray, fetchResource.category)) {
          return
        }
        const createResourceInput = {
          categoryId: getCategoryId(categoriesArray, fetchResource.category) as string,
          userId: userId,
          title: fetchResource.title,
          url: fetchResource.url,
          ResourceType: ResourceType.RESOURCE,
        }
        const response = await createResourceData(createResourceInput)
        resourcesArray.push(response?.data?.createResource as Resource)
      }
      setResources(resourcesArray)
    } catch (error) {
      console.error(error)
    }
  }

  // TODO:????????????????????????????????????????????????
  const deleteResource = async (resource: Resource) => {
    if (!resource.users) return
    for await (const item of resource.users.items) {
      await deleteResourceUserData(item.id)
    }
    await deleteResourceData(resource.id)
    setResources(
      _.filter(resources, function (resourceItem) {
        return resourceItem.id !== resource.id
      })
    )
    await updateUserResourceData('unCheckResources')
  }

  const updateResource = (resource: UpdateResourceInput) => {
    setEditItem(resource)
  }
  const setNewData = (resource: Resource) => {
    setResources([...resources, resource])
  }
  // ????????????????????????
  const getCategoryName = (categoryId: string) => {
    return _.find(categories, function (category) {
      return category.id === categoryId
    })?.name
  }
  // ???????????????ID?????????
  const getCategoryId = (categoriesArray: CategoryType[] | undefined, categoryName: string) => {
    return _.find(categoriesArray, function (category) {
      return category.name === categoryName
    })?.id
  }
  const [isChecked, setIsChecked] = useState<boolean>(false)

  // TODO:?????????????????????????????????????????????(createResourceUserData???????????????????????????updateUserResourceData??????????????????????????????????????????????????????)
  const handleCheck = async (resource: Resource) => {
    if (!resource.users) return
    const uid = currentUser?.getUser?.id as string
    if (isCurrentUserChecked(resource)) {
      // ????????????????????????

      const resourceUser = resource.users.items.find((item) => item.userId === uid)
      if (!resourceUser) return
      await deleteResourceUserData(resourceUser.id)
      await updateUserResourceData('unCheckResources')
    } else {
      // ????????????????????????
      await createResourceUserData(uid, resource.id)
      await updateUserResourceData('checkResources')
    }
    setIsChecked(!isChecked)
    console.log(filterQuery)
    fetchResourcesWithSort(sortQuery, filterQuery)
  }

  const isCurrentUserChecked = (resource: Resource): boolean => {
    if (currentUser?.getUser) {
      const uid = currentUser.getUser.id
      if (!resource.users) return false
      return resource.users.items.some((item) => item.userId === uid)
    }
    return false
  }
  const setEditData = (newResource: Resource) => {
    const filterItems = resources.filter((resource) => resource.id !== newResource.id)
    setResources([newResource, ...filterItems])
    setEditItem({
      id: '',
      categoryId: '',
      userId: '',
      title: '',
      url: '',
    })
  }
  // ???????????????????????????????????????????????????
  const updateUserResourceData = async (
    type: 'checkResources' | 'unCheckResources' | 'deleteResources' | 'addResources'
  ) => {
    if (!currentUser?.getUser) return
    if (!allResourceCount) return
    //NOTE:?????????=(??????????????????????????????????????????)/(??????????????????)
    let newResourcesCount = currentUser.getUser.resourcesCount
    switch (type) {
      case 'checkResources':
        newResourcesCount = currentUser.getUser.resourcesCount + 1
        break
      case 'unCheckResources':
        newResourcesCount = currentUser.getUser.resourcesCount - 1
        break
      case 'addResources':
        updateResourceCount(allResourceCount + 1)

        break
      case 'deleteResources':
        updateResourceCount(allResourceCount - 1)
        break

      default:
        null
    }
    const newProgressRate: number = Math.round((newResourcesCount / allResourceCount) * 100)
    const userInfo = {
      ...currentUser?.getUser,
      resourcesCount: newResourcesCount,
      progressRate: newProgressRate,
    }
    const updateUserInput = {
      id: currentUser.getUser.id,
      name: currentUser.getUser.name,
      email: currentUser.getUser.email,
      profileImagePath: currentUser.getUser.profileImagePath,
      progressRate: newProgressRate,
      resourcesCount: newResourcesCount,
    }
    try {
      await updateAuthUser(updateUserInput)
      updateCurrentUser(userInfo)
    } catch (error) {
      console.error(error)
    }
  }
  const changeSortQuery = (event: SelectChangeEvent) => {
    setSortQuery(event.target.value)
    fetchResourcesWithSort(event.target.value, filterQuery)
  }
  const filterResourcesByCategory = (categoryId: string) => {
    setIsLoading(true)
    if (!categoryId) {
      console.log('categoryId', categoryId)
      setFilterQuery(undefined)
      return fetchResourcesWithSort(sortQuery, undefined)
    }
    const newFilterQuery = { categoryId: { eq: categoryId } }
    setFilterQuery(newFilterQuery)
    try {
      setIsLoading(true)
      fetchResourcesWithSort(sortQuery, newFilterQuery)
    } catch (error) {
      console.error(error)
      throw error
    } finally {
      setIsLoading(false)
    }
  }
  const fetchResourcesWithSort = async (
    sortQuery: string,
    newFilterQuery: ModelResourceFilterInput | undefined
  ) => {
    let response = null
    switch (sortQuery) {
      case 'createdAtDESC':
        response = await fetchResources(ModelSortDirection.DESC, newFilterQuery)
        break
      case 'titleDESC':
        response = await fetchResourcesSortByTitle(ModelSortDirection.DESC, newFilterQuery)
        break
      case 'titleASC':
        response = await fetchResourcesSortByTitle(ModelSortDirection.ASC, newFilterQuery)
        break
      default:
    }
    if (!response) return
    setResources([...response])
  }

  return {
    categories,
    editItem,
    resources,
    isCurrentUserChecked,
    createCategory,
    deleteResource,
    updateResource,
    setNewData,
    getCategoryName,
    handleCheck,
    isOpen,
    openModal,
    setEditData,
    updateUserResourceData,
    isLoading,
    filterResourcesByCategory,
    changeSortQuery,
    isChecked,
  }
}
