/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getResource = /* GraphQL */ `
  query GetResource($id: ID!) {
    getResource(id: $id) {
      id
      categoryId
      userId
      title
      url
      category {
        id
        name
        createdAt
        updatedAt
      }
      user {
        id
        name
        email
        profileImagePath
        progressRate
        resourcesCount
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const listResources = /* GraphQL */ `
  query ListResources(
    $filter: ModelResourceFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listResources(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        categoryId
        userId
        title
        url
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getUser = /* GraphQL */ `
  query GetUser($id: ID!) {
    getUser(id: $id) {
      id
      name
      email
      profileImagePath
      progressRate
      resourcesCount
      posts {
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const listUsers = /* GraphQL */ `
  query ListUsers(
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        email
        profileImagePath
        progressRate
        resourcesCount
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getCategory = /* GraphQL */ `
  query GetCategory($id: ID!) {
    getCategory(id: $id) {
      id
      name
      createdAt
      updatedAt
    }
  }
`;
export const listCategorys = /* GraphQL */ `
  query ListCategorys(
    $filter: ModelCategoryFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listCategorys(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getResourceUser = /* GraphQL */ `
  query GetResourceUser($id: ID!) {
    getResourceUser(id: $id) {
      id
      resourceId
      userId
      createdAt
      updatedAt
    }
  }
`;
export const listResourceUsers = /* GraphQL */ `
  query ListResourceUsers(
    $filter: ModelResourceUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listResourceUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        resourceId
        userId
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getPost = /* GraphQL */ `
  query GetPost($id: ID!) {
    getPost(id: $id) {
      id
      categoryId
      userId
      title
      content
      category {
        id
        name
        createdAt
        updatedAt
      }
      user {
        id
        name
        email
        profileImagePath
        progressRate
        resourcesCount
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const listPosts = /* GraphQL */ `
  query ListPosts(
    $filter: ModelPostFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPosts(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        categoryId
        userId
        title
        content
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getFeed = /* GraphQL */ `
  query GetFeed($id: ID!) {
    getFeed(id: $id) {
      id
      categoryId
      userId
      text
      category {
        id
        name
        createdAt
        updatedAt
      }
      user {
        id
        name
        email
        profileImagePath
        progressRate
        resourcesCount
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const listFeeds = /* GraphQL */ `
  query ListFeeds(
    $filter: ModelFeedFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listFeeds(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        categoryId
        userId
        text
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
