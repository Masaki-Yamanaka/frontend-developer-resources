import styles from './ResourceCreateModal.module.scss'
import * as React from 'react'
import Box from '@mui/material/Box'
import Modal from '@mui/material/Modal'
import { CreateResourceInput } from '@/src/API'
import BaseSelect from '@/src/components/ui/Input/BaseSelect'
import { createResourceData } from '@/src/components/api/resource'
import { useState, useContext } from 'react'
import { AuthContext } from '@/src/components/model/auth'
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
  categories: any[]
  isOpen: boolean
  closeFunc: () => void
}

export default function ChildModal(props: Props) {
  const { currentUser } = useContext(AuthContext)
  // TODO:型エラー出てます。後で修正します
  const [form, setForm]: CreateResourceInput = useState({
    title: '',
    url: '',
    categoryId: '',
    userId: '',
  })
  const handleCreateResource = async (event: any) => {
    event.preventDefault()
    try {
      await setForm({ ...form, userId: currentUser?.getUser?.id })
      await createResourceData(form)
      props.closeFunc()
    } catch (errors) {
      console.error(errors)
    }
  }
  const handleChangeSelect = (event: string) => {
    setForm({ ...form, categoryId: event })
  }
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>, label: string) => {
    if (label === 'title') {
      setForm({ ...form, title: event.target?.value })
    }
    if (label === 'url') {
      setForm({ ...form, url: event.target?.value })
    }
  }
  return (
    <div>
      <React.Fragment>
        <Modal open={props.isOpen} aria-labelledby='child-modal-title' aria-describedby='child-modal-description'>
          <Box sx={{ ...style }}>
            <div className={styles.card}>
              <div className={styles.header}>
                <h3 className={styles.title}>リソースを新規作成する</h3>
                <p className={styles.close} onClick={() => props.closeFunc()}>
                  閉める
                </p>
              </div>
              <form onSubmit={handleCreateResource} className={styles.form}>
                <legend>タイトル</legend>
                <input name='title' onChange={(event) => handleChange(event, 'title')} />

                <legend>URL</legend>
                <input name='url' onChange={(event) => handleChange(event, 'url')} />
                {/*TODO:新規カテゴリーの追加ができないので、おそらくselectBoxやめると思う */}
                <BaseSelect
                  label='カテゴリー'
                  selected={form.categoryId}
                  change={handleChangeSelect}
                  items={props.categories}
                />
                <button className={styles.button}>作成する</button>
              </form>
            </div>
          </Box>
        </Modal>
      </React.Fragment>
    </div>
  )
}
