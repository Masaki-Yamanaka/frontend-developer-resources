import { CreateCategoryInput, CreateCategoryMutation, DeleteCategoryMutation, DeleteCategoryInput } from '@/src/API'
import { API, graphqlOperation } from 'aws-amplify'
import { createCategory, deleteCategory } from '@/src/graphql/mutations'
import { ListCategorysQuery } from '@/src/API'
import { listCategorys } from '@/src/graphql/queries'
import { GraphQLResult } from '@aws-amplify/api'
/**
 * カテゴリーのデータを作成する
 */
export const createCategoryData = async (name: string) => {
  const createInput: CreateCategoryInput = {
    name: name,
  }
  try {
    return (await API.graphql(
      graphqlOperation(createCategory, { input: createInput })
    )) as GraphQLResult<CreateCategoryMutation>
  } catch (error) {
    console.error(error)
    throw error
  }
}

/**
 * カテゴリーのデータを取得する
 */
export const fetchCategories = async () => {
  try {
    const categoriesQuery = (await API.graphql(graphqlOperation(listCategorys))) as {
      data: ListCategorysQuery
      errors: any[]
    }
    return categoriesQuery.data.listCategorys?.items
  } catch (error) {
    console.error(error)
    throw error
  }
}

/**
 * カテゴリーを削除する
 */
export const deleteCategoryData = async (query: string) => {
  const deleteInput: DeleteCategoryInput = {
    id: query,
  }
  try {
    return (await API.graphql(
      graphqlOperation(deleteCategory, { input: deleteInput })
    )) as GraphQLResult<DeleteCategoryMutation>
  } catch (error) {
    console.error(error)
    throw error
  }
}
