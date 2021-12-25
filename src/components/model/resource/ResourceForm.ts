import { CreateResourceInput, Resource, UpdateResourceInput } from '@/src/API'
import { createResourceData } from '@/src/components/api/resource'
import { useState, useContext } from 'react'
import { AuthContext } from '@/src/components/model/auth'
import { ResourceFormType } from '@/src/types/index'
import { updateResourceData } from '@/src/components/api/resource'

export const useResourceForm = (props: ResourceFormType) => {
  const { currentUser } = useContext(AuthContext)
  const [categoryId, setCategoryId] = useState('')
  const handleCreateResource = async (data: CreateResourceInput) => {
    const userId = currentUser?.getUser?.id as string
    data = { ...data, userId: userId, categoryId: categoryId }
    try {
      const response = await createResourceData(data)
      props.setNewData(response?.data?.createResource as Resource)
      props.closeModal()
    } catch (errors) {
      console.error(errors)
    }
  }
  const handleChangeSelect = (event: string) => {
    setCategoryId(event)
  }
  const handleUpdateResource = async (data: UpdateResourceInput) => {
    // NOTE:props.defaultData.idをそのままsetFormするとなぜかidが空になるので下記のように書いています。
    if (props.defaultData) {
      data = { ...data, userId: currentUser?.getUser?.id, id: props.defaultData.id, categoryId: categoryId }
      try {
        const response = await updateResourceData(data)
        props.setNewData(response?.data?.updateResource as Resource)
        props.closeModal()
      } catch (errors) {
        console.error(errors)
      }
    }
  }
  return { handleCreateResource, categoryId, handleChangeSelect, handleUpdateResource }
}
