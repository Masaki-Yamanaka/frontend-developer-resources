import Auth from '@aws-amplify/auth'
import { API, graphqlOperation }  from 'aws-amplify'
import { createUser } from "@/src/graphql/mutations"
import { getUser } from "@/src/graphql/queries"
import { GraphQLResult } from "@aws-amplify/api";
import { GetUserQuery } from "@/src/API"
import { User } from '@/src/types'

export const fetchAuthUser = async () => {
  try {
    return await Auth.currentAuthenticatedUser()
  } catch (error) {
    console.error(error)
  }
}

export const fetchCurrentUser = async (userId: string) => {
  try {
    return (await API.graphql(graphqlOperation(getUser, {id: userId}))) as GraphQLResult<GetUserQuery>
  } catch (error) {
    console.error(error)
  }
}

export const createUserInDynamoDB = async (userInfo: User) => {
  try {
    await API.graphql(graphqlOperation(createUser, {input: userInfo}))
    console.log('ユーザーの作成に成功しました');
  } catch (error: any) {
    if (error.errors[0].errorType === 'DynamoDB:ConditionalCheckFailedException') {
      console.log('すでにユーザーが作成されています')
    }
    console.error(error)
  }
}