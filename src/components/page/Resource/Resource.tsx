import type { NextPage } from 'next'
import Head from 'next/head'
import { useEffect, useState, useContext } from 'react'
import styles from './Resource.module.scss'
import { createCategoryData, fetchCategories } from '@/src/components/api/category'
import { fetchResources, deleteResourceData } from '@/src/components/api/resource'
import { useModal } from '@/src/components/hooks/useModal'
import ResourceCreateModal from '@/src/components/ui/Modal/ResourceCreateModal'
import { formatDateToSlashWithTime } from '@/src/components/utils/useFormatData'
import _ from 'lodash'
import Link from 'next/link'
import { AuthContext } from '@/src/components/model/auth'

const Resource: NextPage = () => {
  const { isOpen, openFunc, closeFunc } = useModal()
  const [categories, setCategories]: any[] = useState([{ id: '', name: '' }])
  const [resources, setResources]: any[] = useState([])
  const { currentUser } = useContext(AuthContext)
  const createCategory = async (name: string) => {
    await createCategoryData(name)
  }
  const deleteResource = async (id: string) => {
    await deleteResourceData(id)
    setResources(
      _.filter(resources, function (o) {
        return o.id !== id
      })
    )
  }

  useEffect(() => {
    ;(async () => {
      const data = await fetchCategories()
      const makeCategoriesData = data?.map((v) => ({ id: v.id, name: v.name }))
      setCategories(makeCategoriesData)
      const resourceData = await fetchResources()
      console.log(resourceData)
      setResources(resourceData)
    })()
  }, [])

  const fetchNewData = async () => {
    const resourceData = await fetchResources()
    setResources(resourceData)
    closeFunc()
  }
  // カテゴリ名を返す
  const getCategoryName = (categoryId: string) => {
    return _.find(categories, function (o) {
      return o.id === categoryId
    }).name
  }

  const handleCheck = () => {
    console.log('aaaaaaaaaa')
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
          <h2>カテゴリー一覧</h2>
          {categories.map((category: any) => (
            <li key={category.id} style={{ marginLeft: 20 }}>
              {category.name}
            </li>
          ))}

          <h2 className={styles.create} onClick={openFunc}>
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
                  <input type='checkbox' onChange={handleCheck} />
                </td>
                <td className={styles.td}>{getCategoryName(resource.categoryId)}</td>
                <Link href={resource.url} passHref>
                  <td className={styles.td}>{resource.title}</td>
                </Link>

                <td className={styles.td}>{formatDateToSlashWithTime(resource.createdAt)}</td>
                <td className={styles.td}>
                  <div className={styles.image}>
                    <img
                      src='https://m.media-amazon.com/images/I/31pcfgVRTZL._AC_.jpg'
                      alt='sample'
                      className={styles.img}
                    />
                  </div>
                </td>
                <td className={styles.td}>編集</td>
                <td className={styles.td} onClick={() => deleteResource(resource.id)}>
                  削除
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <ResourceCreateModal categories={categories} isOpen={isOpen} closeFunc={fetchNewData} />
    </>
  )
}

export default Resource
