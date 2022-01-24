import styles from './ResourceForm.module.scss'
import * as React from 'react'
import { CreateResourceInput, ResourceType } from '@/src/API'
import BaseSelect from '@/src/components/ui/Select/Select'
import { useForm } from 'react-hook-form'
import { ResourceFormType } from '@/src/types/index'
import { useResourceForm } from '@/src/components/model/resource'
import { filtersItemByCategory } from '@/src/components/utils/useSelectItems'
export default function ResourceForm(props: ResourceFormType) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CreateResourceInput>()
  const { handleCreateResource, categoryId, handleChangeSelect, handleUpdateResource } =
    useResourceForm(props)
  return (
    <>
      {/* TODO:後でインプットのコンポーネントを分離する */}
      <form
        onSubmit={
          props.type === 'create'
            ? handleSubmit(handleCreateResource)
            : handleSubmit(handleUpdateResource)
        }
        className={styles.form}
      >
        <legend>タイトル</legend>
        {props.defaultData ? (
          <input
            type='text'
            defaultValue={props.defaultData.title ? props.defaultData.title : ''}
            {...register('title', { required: true })}
          />
        ) : (
          <input type='text' {...register('title', { required: true })} />
        )}
        {errors.title && <p>タイトルは必須です</p>}
        <legend>URL</legend>
        {props.defaultData ? (
          <input
            defaultValue={props.defaultData.url ? props.defaultData.url : ''}
            {...register('url', { required: true })}
          />
        ) : (
          <input {...register('url', { required: true })} />
        )}
        {errors.url && <p>URLは必須です。</p>}
        {/*TODO:新規カテゴリーの追加ができないので、おそらくselectBoxやめると思う */}
        <BaseSelect
          handleChange={(event) => handleChangeSelect(event.target.value)}
          items={filtersItemByCategory(props.categories ? props.categories : [])}
        />
        <input
          defaultValue={ResourceType.RESOURCE}
          {...register('ResourceType')}
          style={{ display: 'none' }}
        />
        <input type='submit' className={styles.button} value='保存' />
      </form>
    </>
  )
}
