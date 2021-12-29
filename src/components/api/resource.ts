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
import {
  ListResourceSortByCreatedAtQuery,
  ListResourceSortByTitleQuery,
  ResourceType,
  ModelSortDirection,
  Resource,
} from '@/src/API'

import { getResource, listResourceSortByCreatedAt, listResourceSortByTitle } from '@/src/graphql/queries'
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
 * 全リソースデータを日付降順で取得する
 */

export const fetchResources = async (query: ModelSortDirection) => {
  try {
    const res = (await API.graphql(
      graphqlOperation(listResourceSortByCreatedAt, {
        ResourceType: ResourceType.RESOURCE,
        sortDirection: query,
      })
    )) as {
      data: ListResourceSortByCreatedAtQuery
      errors: any[]
    }
    return res?.data.listResourceSortByCreatedAt?.items as Resource[]
  } catch (error) {
    console.error(error)
    throw error
  }
}
/**
 * 全リソースデータをタイトル順で取得する
 */

export const fetchResourcesSortByTitle = async (query: ModelSortDirection) => {
  try {
    const res = (await API.graphql(
      graphqlOperation(listResourceSortByTitle, {
        ResourceType: ResourceType.RESOURCE,
        sortDirection: query,
      })
    )) as {
      data: ListResourceSortByTitleQuery
      errors: any[]
    }
    return res?.data.listResourceSortByTitle?.items as Resource[]
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
