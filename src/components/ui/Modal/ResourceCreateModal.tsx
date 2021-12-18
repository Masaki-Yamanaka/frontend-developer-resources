import styles from './ResourceCreateModal.module.scss'
import * as React from 'react'
import Box from '@mui/material/Box'
import Modal from '@mui/material/Modal'
// import { API } from 'aws-amplify'
// import { CreateTodoInput, CreateTodoMutation } from '../API'
// import { createTodo } from '../graphql/mutations'
// import { GRAPHQL_AUTH_MODE } from '@aws-amplify/api'
import BaseSelect from '@/src/components/ui/Input/BaseSelect'
import { useState } from 'react'
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
type Form = {
  title: string
  url: string
  categoryId: string
  uid: string
}

export default function ChildModal(props: Props) {
  const [form, setForm]: Form = useState({
    title: '',
    url: '',
    categoryId: '',
    uid: '',
  })
  const handleCreateTodo = async (event: any) => {
    event.preventDefault()

    // const form = new FormData(event.target)

    // try {
    //   const createInput: CreateTodoInput = {
    //     name: form.get('title')?.toString(),
    //     description: form.get('content')?.toString(),
    //   }

    //   const request = (await API.graphql({
    //     authMode: GRAPHQL_AUTH_MODE.AMAZON_COGNITO_USER_POOLS,
    //     query: createTodo,
    //     variables: {
    //       input: createInput,
    //     },
    //   })) as { data: CreateTodoMutation; errors: any[] }
    //   router.push(`/todo/${request.data.createTodo.id}`)
    // } catch ({ errors }) {
    //   console.error(...errors)
    //   throw new Error(errors[0].message)
    // }
  }
  const handleChangeSelect = (event: any) => {
    setForm({ title: form.title, url: form.url, categoryId: event, uid: form.uid })
  }
  return (
    <div>
      <React.Fragment>
        <Modal open={props.isOpen} aria-labelledby='child-modal-title' aria-describedby='child-modal-description'>
          <Box sx={{ ...style }}>
            <div className={styles.card}>
              <div className={styles.header}>
                <h3 className={styles.title}>New Todo</h3>
                <p className={styles.close} onClick={() => props.closeFunc()}>
                  閉める
                </p>
              </div>
              <form onSubmit={handleCreateTodo} className={styles.form}>
                <legend>Title</legend>
                <input name='title' />

                <legend>Content</legend>
                <textarea name='content' />
                <BaseSelect
                  label='カテゴリー'
                  selected={form.categoryId}
                  change={handleChangeSelect}
                  items={props.categories}
                />
                <button className={styles.button}>Create Todo</button>
              </form>
            </div>
          </Box>
        </Modal>
      </React.Fragment>
    </div>
  )
}
