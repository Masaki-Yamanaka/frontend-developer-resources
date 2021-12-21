import {
  CreateResourceInput,
  CreateResourceMutation,
  DeleteResourceInput,
  DeleteResourceMutation,
  UpdateResourceInput,
  UpdateResourceMutation,
  CreateResourceUserInput,
  CreateResourceUserMutation,
  DeleteResourceUserInput,
  DeleteResourceUserMutation,
} from '@/src/API'
import { API, graphqlOperation } from 'aws-amplify'
import {
  createResource,
  deleteResource,
  updateResource,
  createResourceUser,
  deleteResourceUser,
} from '@/src/graphql/mutations'
import { ListResourcesQuery } from '@/src/API'

import { listResources, getResource } from '@/src/graphql/queries'
import { GraphQLResult } from '@aws-amplify/api'

/**
 * リソースデータを作成する
 */
export const createResourceData = async (updateInput: CreateResourceInput) => {
  try {
    return (await API.graphql(
      graphqlOperation(createResource, { input: updateInput })
    )) as GraphQLResult<CreateResourceMutation>
  } catch ({ errors }) {
    console.error(...errors)
    throw new Error(errors[0].message)
  }
}

/**
 * 全リソースデータを取得する
 */
export const fetchResources = async () => {
  try {
    const ResourcesQuery = (await API.graphql(graphqlOperation(listResources))) as {
      data: ListResourcesQuery
      errors: any[]
    }
    return ResourcesQuery.data.listResources?.items
  } catch (errors) {
    console.error(...errors)
    throw new Error(errors[0].message)
  }
}

/**
 * リソースデータを削除する
 */
export const deleteResourceData = async (query: string) => {
  // TODO:管理者のみリソースデータを削除ができるように制御する
  const deleteInput: DeleteResourceInput = {
    id: query,
  }
  try {
    return (await API.graphql(
      graphqlOperation(deleteResource, { input: deleteInput })
    )) as GraphQLResult<DeleteResourceMutation>
  } catch ({ errors }) {
    console.error(...errors)
    throw new Error(errors[0].message)
  }
}

/**
 * リソースデータを編集する
 */
export const updateResourceData = async (updateInput: UpdateResourceInput) => {
  // TODO:管理者のみリソースデータを編集ができるように制御する
  try {
    return (await API.graphql(
      graphqlOperation(updateResource, { input: updateInput })
    )) as GraphQLResult<UpdateResourceMutation>
  } catch ({ errors }) {
    console.error(...errors)
    throw new Error(errors[0].message)
  }
}

/**
 * リソースに対してチェックをつける
 */
export const createResourceUserData = async (userId: string, resourceId: string) => {
  const resourceUserInput: CreateResourceUserInput = {
    userId: userId,
    resourceId: resourceId,
  }
  try {
    return (await API.graphql(
      graphqlOperation(createResourceUser, { input: resourceUserInput })
    )) as GraphQLResult<CreateResourceUserMutation>
  } catch ({ errors }) {
    console.error(...errors)
    throw new Error(errors[0].message)
  }
}

/**
 * リソースに対してチェックを外す
 */
export const deleteResourceUserData = async (id: string) => {
  const resourceUserInput: DeleteResourceUserInput = {
    id: id,
  }
  try {
    return (await API.graphql(
      graphqlOperation(deleteResourceUser, { input: resourceUserInput })
    )) as GraphQLResult<DeleteResourceUserMutation>
  } catch ({ errors }) {
    console.error(...errors)
    throw new Error(errors[0].message)
  }
}

/**
 * リソースユーザーを取得する
 */
export const fetchResourceUser = async (resourceId: string) => {
  try {
    // ジェネリクスの型わからないので、一旦anyと書いています。
    return (await API.graphql(graphqlOperation(getResource, { id: resourceId }))) as GraphQLResult<any>
  } catch ({ errors }) {
    console.error(...errors)
    throw new Error(errors[0].message)
  }
}
