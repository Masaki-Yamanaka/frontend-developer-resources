import { API, graphqlOperation } from 'aws-amplify'
import { listPosts } from '@/src/graphql/queries'
import { GraphQLResult } from '@aws-amplify/api'
import { ListPostsQuery, Post } from '@/src/API'

export const fetchAllPosts = async () => {
  try {
    const res = (await API.graphql(graphqlOperation(listPosts))) as GraphQLResult<ListPostsQuery>
    return res.data?.listPosts?.items as Post[]
  } catch (error) {
    console.error(error)
  }
}
