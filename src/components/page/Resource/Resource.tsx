import type { NextPage } from 'next'
import Head from 'next/head'
import { useEffect, useState } from 'react'
import styles from './Resource.module.scss'
import { createCategoryData, fetchCategories } from '@/src/components/api/category'
import { createResourceData, fetchResources } from '@/src/components/api/resource'
import { useModal } from '@/src/components/hooks/useModal'
import ResourceCreateModal from '@/src/components/ui/Modal/ResourceCreateModal'
import _ from 'lodash'
import Auth from '@aws-amplify/auth'
import Link from 'next/link'

const Resource: NextPage = () => {
  const { isOpen, openFunc, closeFunc } = useModal()
  const [categories, setCategories]: any[] = useState([])
  const [resources, setResources]: any[] = useState([])

  const createCategory = async (name: string) => {
    await createCategoryData(name)
  }
  const createResource = async (categoryId: string, uid: string) => {
    await createResourceData(categoryId, uid)
  }
  useEffect(() => {
    ;(async () => {
      const user = await Auth.currentAuthenticatedUser()
      console.log('user: ', user)
      const data = await fetchCategories()
      setCategories(data)
      const resourceData = await fetchResources()
      setResources(resourceData)
    })()
  }, [])

  return (
    <>
      <div className={styles.resource}>
        <Head>
          <title>Resource</title>
          <meta name='description' content='Resource' />
          <link rel='icon' href='/favicon.ico' />
        </Head>
        <div className={styles.head}>
          <h2>カテゴリー一覧</h2>
          {categories.map((caterory: any) => (
            <li key={caterory.id}>{caterory.name}</li>
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
            </tr>
            {resources.map((resource: any) => (
              <tr className={styles.tr} key={resource.id}>
                <td className={styles.td}>
                  <input type='checkbox' />
                </td>
                <td className={styles.td}>{resource.categoryId}</td>
                <Link href={resource.url}>
                  <td className={styles.td}>{resource.title}</td>
                </Link>

                <td className={styles.td}>{resource.createdAt}</td>
                <td className={styles.td}>
                  <div className={styles.image}>
                    <img
                      src='https://m.media-amazon.com/images/I/31pcfgVRTZL._AC_.jpg'
                      alt='sample'
                      className={styles.img}
                    />
                  </div>
                </td>
              </tr>
            ))}
            <tr className={styles.tr}>
              <td className={styles.td}>
                <input type='checkbox' />
              </td>
              <td className={styles.td}>セル</td>
              <td className={styles.td}>表の中の１つ１つの項目</td>
              <td className={styles.td}>2021/11/3</td>
              <td className={styles.td}>
                <div className={styles.image}>
                  <img
                    src='https://m.media-amazon.com/images/I/31pcfgVRTZL._AC_.jpg'
                    alt='sample'
                    className={styles.img}
                  />
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <ResourceCreateModal isOpen={isOpen} closeFunc={closeFunc} />
    </>
  )
}

export default Resource
