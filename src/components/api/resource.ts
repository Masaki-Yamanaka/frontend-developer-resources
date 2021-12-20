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
import { API } from 'aws-amplify'
import {
  createResource,
  deleteResource,
  updateResource,
  createResourceUser,
  deleteResourceUser,
} from '@/src/graphql/mutations'
import { GRAPHQL_AUTH_MODE } from '@aws-amplify/api'
import { ListResourcesQuery } from '@/src/API'

import { listResources, getResource } from '@/src/graphql/queries'
import { GraphQLResult } from '@aws-amplify/api'

/**
 * リソースデータを作成する
 */
export const createResourceData = async (updateInput: CreateResourceInput) => {
  try {
    const response = (await API.graphql({
      authMode: GRAPHQL_AUTH_MODE.AMAZON_COGNITO_USER_POOLS,
      query: createResource,
      variables: {
        input: updateInput,
      },
    })) as { data: CreateResourceMutation; errors: any[] }
    return response
  } catch ({ errors }) {
    console.error(...errors)
    throw new Error(errors[0].message)
  }
}

/**
 * 全リソースデータを取得する
 */
export const fetchResources = async () => {
  const ResourcesQuery = (await API.graphql({
    query: listResources,
  })) as { data: ListResourcesQuery; errors: any[] }
  return ResourcesQuery.data.listResources?.items
}

/**
 * リソースデータを削除する
 */
export const deleteResourceData = async (query: string) => {
  // TODO:管理者のみリソースデータを削除ができるように制御する
  const deleteInput: DeleteResourceInput = {
    id: query,
  }
  const response = (await API.graphql({
    query: deleteResource,
    variables: {
      input: deleteInput,
    },
  })) as { data: DeleteResourceMutation; errors: any[] }

  return {
    response,
  }
}

/**
 * リソースデータを編集する
 */
export const updateResourceData = async (updateInput: UpdateResourceInput) => {
  try {
    // TODO:管理者のみリソースデータを編集ができるように制御する
    const response = (await API.graphql({
      authMode: GRAPHQL_AUTH_MODE.AMAZON_COGNITO_USER_POOLS,
      query: updateResource,
      variables: {
        input: updateInput,
      },
    })) as { data: UpdateResourceMutation; errors: any[] }
    return response
  } catch ({ errors }) {
    console.error(...errors)
    throw new Error(errors[0].message)
  }
}

/**
 * リソースに対してチェックをつける
 */
export const createResourceUserData = async (userId: string, resourceId: string) => {
  try {
    const resourceUserInput: CreateResourceUserInput = {
      userId: userId,
      resourceId: resourceId,
    }
    const response = (await API.graphql({
      authMode: GRAPHQL_AUTH_MODE.AMAZON_COGNITO_USER_POOLS,
      query: createResourceUser,
      variables: {
        input: resourceUserInput,
      },
    })) as { data: CreateResourceUserMutation; errors: any[] }
    return response
  } catch ({ errors }) {
    console.error(...errors)
    throw new Error(errors[0].message)
  }
}

/**
 * リソースに対してチェックを外す
 */
export const deleteResourceUserData = async (id: string) => {
  try {
    const resourceUserInput: DeleteResourceUserInput = {
      id: id,
    }
    const response = (await API.graphql({
      authMode: GRAPHQL_AUTH_MODE.AMAZON_COGNITO_USER_POOLS,
      query: deleteResourceUser,
      variables: {
        input: resourceUserInput,
      },
    })) as { data: DeleteResourceUserMutation; errors: any[] }
    return response
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
    return (await API.graphql({
      authMode: GRAPHQL_AUTH_MODE.AMAZON_COGNITO_USER_POOLS,
      query: getResource,
      variables: {
        id: resourceId,
      },
    })) as { data: GraphQLResult<any>; errors: any[] }
  } catch ({ errors }) {
    console.error(...errors)
    throw new Error(errors[0].message)
  }
}
