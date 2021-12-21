import styles from './ResourceCreateModal.module.scss'
import * as React from 'react'
import Box from '@mui/material/Box'
import Modal from '@mui/material/Modal'
import { UpdateResourceInput } from '@/src/API'
import BaseSelect from '@/src/components/ui/Input/BaseSelect'
import { updateResourceData } from '@/src/components/api/resource'
import { useState, useContext } from 'react'
import { AuthContext } from '@/src/components/model/auth'
import { useForm } from 'react-hook-form'
import { Category } from '@/src/types/index'
const style = {
  position: 'absolute' as const,
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  boxShadow: 24,
  pt: 2,
  px: 4,
  pb: 3,
}

type Props = {
  categories: Category[] | undefined
  isOpen: boolean
  closeModal: () => void
  defaultData: UpdateResourceInput
}

type Inputs = {
  id: string
  title: string
  url: string
  categoryId: string
  userId: string | undefined
}

export default function ChildModal(props: Props) {
  const { register, handleSubmit, errors } = useForm<Inputs>()
  const [categoryId, setCategoryId] = useState('')
  const { currentUser } = useContext(AuthContext)
  const handleUpdateResource = async (data: Inputs) => {
    // NOTE:props.defaultData.idをそのままsetFormするとなぜかidが空になるので下記のように書いています。
    data = { ...data, userId: currentUser?.getUser?.id, id: props.defaultData.id, categoryId: categoryId }
    try {
      await updateResourceData(data)
      props.closeModal()
    } catch (errors) {
      console.error(errors)
    }
  }
  const handleChangeSelect = (event: string) => {
    setCategoryId(event)
  }
  return (
    <div>
      <React.Fragment>
        <Modal open={props.isOpen} aria-labelledby='child-modal-title' aria-describedby='child-modal-description'>
          <Box sx={{ ...style }}>
            <div className={styles.card}>
              <div className={styles.header}>
                <h3 className={styles.title}>リソースを編集する</h3>
                <p className={styles.close} onClick={() => props.closeModal()}>
                  閉める
                </p>
              </div>
              <form onSubmit={handleSubmit(handleUpdateResource)} className={styles.form}>
                <legend>タイトル</legend>
                <input
                  name='title'
                  defaultValue={props.defaultData.title ? props.defaultData.title : ''}
                  ref={register({ required: true })}
                />
                {errors.title && 'タイトルは必須です。'}
                <legend>URL</legend>
                <input
                  name='url'
                  defaultValue={props.defaultData.url ? props.defaultData.url : ''}
                  ref={register({ required: true })}
                />
                {errors.url && 'URLは必須です。'}
                {/*TODO:新規カテゴリーの追加ができないので、おそらくselectBoxやめると思う */}
                <BaseSelect
                  label='カテゴリー'
                  selected={categoryId}
                  change={handleChangeSelect}
                  items={props.categories}
                />
                <input type='submit' className={styles.button} value='保存' />
              </form>
            </div>
          </Box>
        </Modal>
      </React.Fragment>
    </div>
  )
}
