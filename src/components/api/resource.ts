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
  Resource,
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
  } catch (error) {
    console.error(error)
    throw error
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
    return ResourcesQuery.data.listResources?.items as Resource[]
  } catch (error) {
    console.error(error)
    throw error
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
  } catch (error) {
    console.error(error)
    throw error
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
  } catch (error) {
    console.error(error)
    throw error
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
  } catch (error) {
    console.error(error)
    throw error
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
  } catch (error) {
    console.error(error)
    throw error
  }
}

/**
 * リソースユーザーを取得する
 */
export const fetchResourceUser = async (resourceId: string) => {
  try {
    // ジェネリクスの型わからないので、一旦anyと書いています。
    return (await API.graphql(graphqlOperation(getResource, { id: resourceId }))) as GraphQLResult<any>
  } catch (error) {
    console.error(error)
    throw error
  }
}
