import type { NextPage } from 'next'
import Head from 'next/head'
import { useState } from 'react'
import styles from './Resource.module.scss'
import { useModal } from '@/src/components/hooks/useModal'
// TODO: ResourceFormの場所変更する
import ResourceForm from '@/src/components/ui/Resource/ResourceForm'
import { ResourceTable } from '@/src/components/model/resource/ResourceTable/ResourceTable'

import BaseModal from '@/src/components/ui/Modal/BaseModal'
import { CategoryType } from '@/src/types/index'
import { useResource } from '@/src/components/model/resource'
import { BaseSelect } from '@/src/components/ui/Select'
import { sortItems } from '@/src/components/utils/useSort'
import { SelectChangeEvent } from '@mui/material/Select'

const ResourcePage: NextPage = () => {
  const { isOpen, openModal, closeModal } = useModal()
  const {
    categories,
    editItem,
    isLoading,
    createCategory,
    setNewData,
    setEditData,
    changeSortQuery,
    filterResourcesByCategory,
    resources,
  } = useResource()

  const [modalType, setModalType] = useState<string>('')
  const openCreateModal = () => {
    openModal()
    setModalType('create')
  }

  return (
    <>
      <div className={styles.resource}>
        <Head>
          <title>Resource</title>
          <meta name='description' content='Resource' />
        </Head>

        {isLoading ? <p>Loading.........</p> : null}
        <BaseSelect
          handleChange={(event: SelectChangeEvent) => changeSortQuery(event)}
          items={sortItems}
          defaultValue={sortItems[0]}
        />
        <ResourceTable openCreateModal={() => openCreateModal()} resources={resources} />
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
        </div>
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
