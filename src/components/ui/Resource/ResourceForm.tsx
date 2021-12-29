import styles from './ResourceForm.module.scss'
import * as React from 'react'
import { CreateResourceInput, ResourceType } from '@/src/API'
import BaseSelect from '@/src/components/ui/Input/BaseSelect'
import { useForm } from 'react-hook-form'
import { ResourceFormType } from '@/src/types/index'
import { useResourceForm } from '@/src/components/model/resource'


export default function ResourceForm(props: ResourceFormType) {
  const { register, handleSubmit, errors } = useForm<CreateResourceInput>()
  const { handleCreateResource, categoryId, handleChangeSelect, handleUpdateResource } = useResourceForm(props)

  return (
    <>
      {/* TODO:後でインプットのコンポーネントを分離する */}
      <form
        onSubmit={props.type === 'create' ? handleSubmit(handleCreateResource) : handleSubmit(handleUpdateResource)}
        className={styles.form}
      >
        <legend>タイトル</legend>
        {props.defaultData ? (
          <input
            name='title'
            defaultValue={props.defaultData.title ? props.defaultData.title : ''}
            ref={register({ required: true })}
          />
        ) : (
          <input name='title' ref={register({ required: true })} />
        )}
        {errors.title && 'タイトルは必須です。'}
        <legend>URL</legend>
        {props.defaultData ? (
          <input
            name='url'
            defaultValue={props.defaultData.url ? props.defaultData.url : ''}
            ref={register({ required: true })}
          />
        ) : (
          <input name='url' ref={register({ required: true })} />
        )}
        {errors.url && 'URLは必須です。'}
        {/*TODO:新規カテゴリーの追加ができないので、おそらくselectBoxやめると思う */}
        <BaseSelect label='カテゴリー' selected={categoryId} change={handleChangeSelect} items={props.categories} />
        <input
          name='ResourceType'
          defaultValue={ResourceType.RESOURCE}
          ref={register({ required: true })}
          style={{ display: 'none' }}
        />
        <input type='submit' className={styles.button} value='保存' />
      </form>
    </>
  )
}
