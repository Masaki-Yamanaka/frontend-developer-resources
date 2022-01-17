import type { NextPage } from 'next'
import Head from 'next/head'
import { useState } from 'react'
import styles from './Resource.module.scss'
import { useModal } from '@/src/components/hooks/useModal'
// TODO: ResourceFormの場所変更する
import ResourceForm from '@/src/components/ui/Resource/ResourceForm'
import { ResourceTable } from '@/src/components/model/resource/ResourceTable/ResourceTable'

import BaseModal from '@/src/components/ui/Modal/BaseModal'
import { useResource } from '@/src/components/model/resource'
import { BaseSelect } from '@/src/components/ui/Select'
import { sortItems, filtersItemByCategory } from '@/src/components/utils/useSelectItems'
import { SelectChangeEvent } from '@mui/material/Select'
import { ResourceCard } from '@/src/components/model/resource/ResourceCard'
import { Resource } from '@/src/API'

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
    clickResource,
    selectedResource,
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
        {selectedResource ? <ResourceCard resource={selectedResource} /> : null}

        <div className={styles.selectBoxes}>
          <div className={styles.selectBox}>
            <BaseSelect
              handleChange={(event: SelectChangeEvent) => changeSortQuery(event)}
              items={sortItems}
            />
          </div>
          <div className={`${styles.selectBox} ${styles.ml8}`}>
            <BaseSelect
              handleChange={(event) => filterResourcesByCategory(event.target.value)}
              items={filtersItemByCategory(categories)}
            />
          </div>
        </div>

        {/* <BaseSelect
          handleChange={(event) => filterResourcesByCheck(event.target.value)}
          items={filtersItemByChecked}
        /> */}
        {isLoading ? <p>Loading.........</p> : null}
        <ResourceTable
          openCreateModal={() => openCreateModal()}
          resources={resources}
          clickResource={(resource: Resource) => clickResource(resource)}
        />
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
