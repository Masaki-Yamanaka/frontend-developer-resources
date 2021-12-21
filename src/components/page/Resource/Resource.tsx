import type { NextPage } from 'next'
import Head from 'next/head'
import { useEffect, useState, useContext } from 'react'
import styles from './Resource.module.scss'
import { createCategoryData, fetchCategories } from '@/src/components/api/category'
import {
  fetchResources,
  deleteResourceData,
  createResourceUserData,
  deleteResourceUserData,
} from '@/src/components/api/resource'
import { useModal } from '@/src/components/hooks/useModal'
import ResourceCreateModal from '@/src/components/ui/Modal/ResourceCreateModal'
import ResourceEditModal from '@/src/components/ui/Modal/ResourceEditModal'
import { formatDateToSlashWithTime } from '@/src/components/utils/useFormatData'
import _ from 'lodash'
import Link from 'next/link'
import { AuthContext } from '@/src/components/model/auth'
import { UpdateResourceInput } from '@/src/API'
import { Category } from '@/src/types/index'

import { useForm } from 'react-hook-form'
type Inputs = {
  checked: number
}
const Resource: NextPage = () => {
  const { isOpen, openModal, closeModal, isOpenSecond, openModalSecond, closeModalSecond } = useModal()
  const [categories, setCategories] = useState<Category[] | undefined>([{ id: '', name: '' }])
  const [editItem, setEditItem] = useState<UpdateResourceInput>({
    id: '',
    categoryId: '',
    userId: '',
    title: '',
    url: '',
  })
  const { register } = useForm<Inputs>()
  const [resources, setResources]: any[] = useState([])
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
      setResources(resourceData)
    })()
  }, [])

  const deleteResource = async (resource: any) => {
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
    openModalSecond()
  }
  const closeEditModal = async () => {
    const resourceData = await fetchResources()
    setResources(resourceData)
    setEditItem({
      id: '',
      categoryId: '',
      userId: '',
      title: '',
      url: '',
    })
    closeModalSecond()
  }

  const fetchNewData = async () => {
    const resourceData = await fetchResources()
    setResources(resourceData)
    closeModal()
  }
  // カテゴリ名を返す
  const getCategoryName = (categoryId: string) => {
    return _.find(categories, function (category) {
      return category.id === categoryId
    })?.name
  }

  const handleCheck = async (resource: any) => {
    const uid = currentUser?.getUser?.id as string
    if (isCurrentUserChecked(resource)) {
      // チェックをはずす
      const resourceUser = _.find(resource.users.items, function (item: any) {
        return item.userId === uid
      })
      await deleteResourceUserData(resourceUser.id)
    } else {
      // チェックをつける
      await createResourceUserData(uid, resource.id)
    }
    const resourceData = await fetchResources()
    setResources(resourceData)
  }

  const isCurrentUserChecked = (resource: any): boolean => {
    if (currentUser?.getUser) {
      const uid = currentUser.getUser.id as string
      return _.some(resource.users.items, function (item: any) {
        return item.userId === uid
      })
    }
    return false
  }
  return (
    <>
      <div className={styles.resource}>
        <Head>
          <title>Resource</title>
          <meta name='description' content='Resource' />
          <link rel='icon' href='/favicon.ico' />
        </Head>
        <h1> {currentUser?.getUser?.name}さん、こんにちは</h1>
        <div className={styles.head}>
          <h2
            onClick={() => {
              createCategory('javascript')
            }}
          >
            カテゴリー一覧
          </h2>
          {categories?.map((category: Category) => (
            <li key={category.id} style={{ marginLeft: 20 }}>
              {category.name}
            </li>
          ))}

          <h2 className={styles.create} onClick={openModal}>
            リソース新規作作成
          </h2>
        </div>

        <table className={styles.table}>
          <tbody>
            <tr className={styles.tr}>
              <th className={styles.th}></th>
              <th className={styles.th}>カテゴリー</th>
              <th className={styles.th}>タイトル</th>
              <th className={styles.th}>更新日</th>
              <th className={styles.th}>完了者</th>
              <th className={styles.th}>編集</th>
              <th className={styles.th}>削除</th>
            </tr>
            {resources.map((resource: any) => (
              <tr className={styles.tr} key={resource.id}>
                <td className={styles.td}>
                  <form className={styles.form}>
                    <input
                      type='checkbox'
                      name='checked'
                      ref={register}
                      checked={isCurrentUserChecked(resource)}
                      onChange={() => {
                        handleCheck(resource)
                      }}
                    />
                  </form>
                </td>
                <td className={styles.td}>{getCategoryName(resource.categoryId)}</td>
                <Link href={resource.url} passHref>
                  <td className={styles.td}>{resource.title}</td>
                </Link>

                <td className={styles.td}>{formatDateToSlashWithTime(resource.createdAt)}</td>
                <td className={styles.td} style={{ display: 'flex' }}>
                  {resource.users.items.map((item: any) => (
                    <div className={styles.image} key={item.id}>
                      <img src={item.user.profileImagePath} alt='sample' className={styles.img} />
                    </div>
                  ))}
                </td>

                <td className={styles.td} onClick={() => updateResource(resource)}>
                  編集
                </td>
                <td className={styles.td} onClick={() => deleteResource(resource)}>
                  削除
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <ResourceCreateModal categories={categories} isOpen={isOpen} closeModal={fetchNewData} />
      <ResourceEditModal
        categories={categories}
        isOpen={isOpenSecond}
        closeModal={closeEditModal}
        defaultData={editItem}
      />
    </>
  )
}

export default Resource
