import { CreateCategoryInput, CreateCategoryMutation, DeleteCategoryMutation, DeleteCategoryInput } from '@/src/API'
import { API } from 'aws-amplify'
import { createCategory, deleteCategory } from '@/src/graphql/mutations'
import { GRAPHQL_AUTH_MODE } from '@aws-amplify/api'
import { ListCategorysQuery } from '@/src/API'

import { listCategorys } from '@/src/graphql/queries'

/**
 * カテゴリーのデータを作成する
 */
export const createCategoryData = async (name: string) => {
  try {
    const createInput: CreateCategoryInput = {
      name: name,
    }
    const response = (await API.graphql({
      authMode: GRAPHQL_AUTH_MODE.AMAZON_COGNITO_USER_POOLS,
      query: createCategory,
      variables: {
        input: createInput,
      },
    })) as { data: CreateCategoryMutation; errors: any[] }
    return response
  } catch ({ errors }) {
    console.error(...errors)
    throw new Error(errors[0].message)
  }
}

/**
 * カテゴリーのデータを取得する
 */
export const fetchCategories = async () => {
  const categoriesQuery = (await API.graphql({
    query: listCategorys,
  })) as { data: ListCategorysQuery; errors: any[] }

  return categoriesQuery.data.listCategorys?.items
}

/**
 * カテゴリーを削除する
 */
export const deleteCategoryData = async (query: string) => {
  const deleteInput: DeleteCategoryInput = {
    id: query,
  }
  const response = (await API.graphql({
    query: deleteCategory,
    variables: {
      input: deleteInput,
    },
  })) as { data: DeleteCategoryMutation; errors: any[] }

  return {
    response,
  }
}
