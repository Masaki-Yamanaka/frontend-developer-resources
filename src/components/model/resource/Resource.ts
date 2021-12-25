import { useEffect, useState, useContext } from 'react'
import { createCategoryData, fetchCategories } from '@/src/components/api/category'
import {
  fetchResources,
  deleteResourceData,
  createResourceUserData,
  deleteResourceUserData,
} from '@/src/components/api/resource'
import { useModal } from '@/src/components/hooks/useModal'
import _ from 'lodash'

import { AuthContext } from '@/src/components/model/auth'
import { UpdateResourceInput, Resource } from '@/src/API'
import { Category } from '@/src/types/index'

export const useResource = () => {
  const { isOpen, openModal } = useModal()
  const [categories, setCategories] = useState<Category[] | undefined>([])
  const [editItem, setEditItem] = useState<UpdateResourceInput>()

  const [resources, setResources] = useState<Resource[]>([])
  const { currentUser } = useContext(AuthContext)

  const createCategory = async (name: string) => {
    await createCategoryData(name)
  }

  useEffect(() => {
    ;(async () => {
      const categoryItems = await fetchCategories()
      const makeCategoriesData = categoryItems?.map((categoryItem) => ({
        id: categoryItem.id,
        name: categoryItem.name,
      }))
      setCategories(makeCategoriesData)
      const resourceData = await fetchResources()
      setResources([...resourceData])
    })()
  }, [])

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
  }

  const updateResource = (resource: UpdateResourceInput) => {
    setEditItem(resource)
  }
  const setNewData = (resource: Resource) => {
    setResources([...resources, resource])
  }
  // カテゴリ名を返す
  const getCategoryName = (categoryId: string) => {
    return _.find(categories, function (category) {
      return category.id === categoryId
    })?.name
  }

  const handleCheck = async (resource: Resource) => {
    if (!resource.users) return
    const uid = currentUser?.getUser?.id as string
    if (isCurrentUserChecked(resource)) {
      // チェックをはずす
      const resourceUser = resource.users.items.find((item) => item.userId === uid)
      if (!resourceUser) return
      await deleteResourceUserData(resourceUser.id)
    } else {
      // チェックをつける
      await createResourceUserData(uid, resource.id)
    }
    const resourceData = await fetchResources()
    setResources(resourceData)
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
  }
}
