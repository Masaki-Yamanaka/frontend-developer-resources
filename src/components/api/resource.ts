import { CreateResourceInput, CreateResourceMutation, DeleteResourceInput, DeleteResourceMutation } from '@/src/API'
import { API } from 'aws-amplify'
import { createResource, deleteResource } from '@/src/graphql/mutations'
import { GRAPHQL_AUTH_MODE } from '@aws-amplify/api'
import { ListResourcesQuery } from '@/src/API'

import { listResources } from '@/src/graphql/queries'

/**
 * リソースデータを作成する
 */
export const createResourceData = async (createInput: CreateResourceInput) => {
  console.log('createInput_______', createInput)
  try {
    // TODO:タイトル名などが固定になっているので、後で修正する。
    const response = (await API.graphql({
      authMode: GRAPHQL_AUTH_MODE.AMAZON_COGNITO_USER_POOLS,
      query: createResource,
      variables: {
        input: createInput,
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
