import { API, graphqlOperation } from 'aws-amplify'
import { listPosts } from '@/src/graphql/queries'
import { createPost } from '@/src/graphql/mutations'
import { GraphQLResult } from '@aws-amplify/api'
import { ListPostsQuery, Post, CreatePostInput } from '@/src/API'

export const fetchPosts = async () => {
  try {
    const res = (await API.graphql(graphqlOperation(listPosts))) as GraphQLResult<ListPostsQuery>
    return res.data?.listPosts?.items as Post[]
  } catch (error) {
    console.error(error)
  }
}

export const createPostData = async (post: CreatePostInput) => {
  try {
    await API.graphql(graphqlOperation(createPost, {input: post}))
    console.log('記事の作成に成功しました');
  } catch (error) {
    console.error(error)
  }
}
