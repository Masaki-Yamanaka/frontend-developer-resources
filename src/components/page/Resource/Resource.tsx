import type { NextPage } from 'next'
import Head from 'next/head'
import { useState } from 'react'
import styles from './Resource.module.scss'
import { useModal } from '@/src/components/hooks/useModal'
import ResourceForm from '@/src/components/ui/Resource/ResourceForm'
import BaseModal from '@/src/components/ui/Modal/BaseModal'
import { formatDateToSlashWithTime } from '@/src/components/utils/useFormatData'
import Link from 'next/link'
import { Resource } from '@/src/API'
import { CategoryType } from '@/src/types/index'
import { useResource } from '@/src/components/model/resource'
import { Button } from '../../ui/Button'

const ResourcePage: NextPage = () => {
  const { isOpen, openModal, closeModal } = useModal()
  const {
    categories,
    editItem,
    resources,
    isLoading,
    isCurrentUserChecked,
    createCategory,
    deleteResource,
    updateResource,
    setNewData,
    getCategoryName,
    handleCheck,
    setEditData,
    changeSortQuery,
    filterResourcesByCategory,
  } = useResource()

  const [modalType, setModalType] = useState<string>('')
  const openCreateModal = () => {
    openModal()
    setModalType('create')
  }
  const openEditModal = (resource: Resource) => {
    updateResource(resource)
    openModal()
    setModalType('edit')
  }
  return (
    <>
      <div className={styles.resource}>
        <Head>
          <title>Resource</title>
          <meta name='description' content='Resource' />
          <link rel='icon' href='/favicon.ico' />
        </Head>

        {isLoading ? <p>Loading.........</p> : null}

        <div className={styles.head}>
          <h2
            onClick={() => {
              createCategory('javascript')
            }}
          >
            カテゴリーでソートする
          </h2>
          <ul className={styles.categories}>
            {categories?.map((category: CategoryType) => (
              <li
                key={category.id}
                style={{ marginLeft: 20, cursor: 'pointer' }}
                onClick={() => {
                  filterResourcesByCategory(category.id)
                }}
              >
                {category.name}
              </li>
            ))}
          </ul>
          <div className={styles.sort}>
            <select name='sortQuery' onChange={changeSortQuery}>
              <option value='createdAtDESC'>新着順</option>
              <option value='titleDESC'>タイトル:降順</option>
              <option value='titleASC'>タイトル:昇順</option>
            </select>
          </div>
          <div className={styles.create}>
            <Button onClick={openCreateModal}> リソース新規作作成</Button>
          </div>
        </div>
        {/* TODO:後で別コンポーネントに分ける */}
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
            {resources.map((resource: Resource) => (
              <tr className={styles.tr} key={resource.id}>
                <td className={styles.td}>
                  <form className={styles.form}>
                    <input
                      type='checkbox'
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
                  {resource.users
                    ? resource.users.items.map((item) => (
                        <div className={styles.image} key={item.id}>
                          {/* TODO:後でnext/imageを使う */}
                          <img src={item.user.profileImagePath} alt='sample' className={styles.img} />
                        </div>
                      ))
                    : null}
                </td>
                <td className={styles.td} onClick={() => openEditModal(resource)}>
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
      <BaseModal
        title={modalType === 'create' ? 'リソースを新規作成する' : 'リソースを編集する'}
        isOpen={isOpen}
        closeModal={closeModal}
        child={
          <ResourceForm
            type={modalType}
            categories={categories}
            closeModal={closeModal}
            setNewData={modalType === 'create' ? setNewData : setEditData}
            defaultData={modalType === 'create' ? undefined : editItem}
          />
        }
      ></BaseModal>
    </>
  )
}

export default ResourcePage
