/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createResource = /* GraphQL */ `
  mutation CreateResource(
    $input: CreateResourceInput!
    $condition: ModelResourceConditionInput
  ) {
    createResource(input: $input, condition: $condition) {
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
      users {
        items {
          id
          resourceId
          userId
          createdAt
          updatedAt
        }
        nextToken
      }
      updatedAt
      createdAt
      ResourceType
    }
  }
`;
export const updateResource = /* GraphQL */ `
  mutation UpdateResource(
    $input: UpdateResourceInput!
    $condition: ModelResourceConditionInput
  ) {
    updateResource(input: $input, condition: $condition) {
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
      users {
        items {
          id
          resourceId
          userId
          createdAt
          updatedAt
        }
        nextToken
      }
      updatedAt
      createdAt
      ResourceType
    }
  }
`;
export const deleteResource = /* GraphQL */ `
  mutation DeleteResource(
    $input: DeleteResourceInput!
    $condition: ModelResourceConditionInput
  ) {
    deleteResource(input: $input, condition: $condition) {
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
      users {
        items {
          id
          resourceId
          userId
          createdAt
          updatedAt
        }
        nextToken
      }
      updatedAt
      createdAt
      ResourceType
    }
  }
`;
export const createResourceUser = /* GraphQL */ `
  mutation CreateResourceUser(
    $input: CreateResourceUserInput!
    $condition: ModelResourceUserConditionInput
  ) {
    createResourceUser(input: $input, condition: $condition) {
      id
      resourceId
      userId
      resource {
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
        users {
          nextToken
        }
        updatedAt
        createdAt
        ResourceType
      }
      user {
        id
        name
        email
        profileImagePath
        progressRate
        resourcesCount
        posts {
          nextToken
        }
        resources {
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const updateResourceUser = /* GraphQL */ `
  mutation UpdateResourceUser(
    $input: UpdateResourceUserInput!
    $condition: ModelResourceUserConditionInput
  ) {
    updateResourceUser(input: $input, condition: $condition) {
      id
      resourceId
      userId
      resource {
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
        users {
          nextToken
        }
        updatedAt
        createdAt
        ResourceType
      }
      user {
        id
        name
        email
        profileImagePath
        progressRate
        resourcesCount
        posts {
          nextToken
        }
        resources {
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const deleteResourceUser = /* GraphQL */ `
  mutation DeleteResourceUser(
    $input: DeleteResourceUserInput!
    $condition: ModelResourceUserConditionInput
  ) {
    deleteResourceUser(input: $input, condition: $condition) {
      id
      resourceId
      userId
      resource {
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
        users {
          nextToken
        }
        updatedAt
        createdAt
        ResourceType
      }
      user {
        id
        name
        email
        profileImagePath
        progressRate
        resourcesCount
        posts {
          nextToken
        }
        resources {
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const createUser = /* GraphQL */ `
  mutation CreateUser(
    $input: CreateUserInput!
    $condition: ModelUserConditionInput
  ) {
    createUser(input: $input, condition: $condition) {
      id
      name
      email
      profileImagePath
      progressRate
      resourcesCount
      posts {
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
      resources {
        items {
          id
          resourceId
          userId
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const updateUser = /* GraphQL */ `
  mutation UpdateUser(
    $input: UpdateUserInput!
    $condition: ModelUserConditionInput
  ) {
    updateUser(input: $input, condition: $condition) {
      id
      name
      email
      profileImagePath
      progressRate
      resourcesCount
      posts {
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
      resources {
        items {
          id
          resourceId
          userId
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const deleteUser = /* GraphQL */ `
  mutation DeleteUser(
    $input: DeleteUserInput!
    $condition: ModelUserConditionInput
  ) {
    deleteUser(input: $input, condition: $condition) {
      id
      name
      email
      profileImagePath
      progressRate
      resourcesCount
      posts {
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
      resources {
        items {
          id
          resourceId
          userId
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const createCategory = /* GraphQL */ `
  mutation CreateCategory(
    $input: CreateCategoryInput!
    $condition: ModelCategoryConditionInput
  ) {
    createCategory(input: $input, condition: $condition) {
      id
      name
      createdAt
      updatedAt
    }
  }
`;
export const updateCategory = /* GraphQL */ `
  mutation UpdateCategory(
    $input: UpdateCategoryInput!
    $condition: ModelCategoryConditionInput
  ) {
    updateCategory(input: $input, condition: $condition) {
      id
      name
      createdAt
      updatedAt
    }
  }
`;
export const deleteCategory = /* GraphQL */ `
  mutation DeleteCategory(
    $input: DeleteCategoryInput!
    $condition: ModelCategoryConditionInput
  ) {
    deleteCategory(input: $input, condition: $condition) {
      id
      name
      createdAt
      updatedAt
    }
  }
`;
export const createPost = /* GraphQL */ `
  mutation CreatePost(
    $input: CreatePostInput!
    $condition: ModelPostConditionInput
  ) {
    createPost(input: $input, condition: $condition) {
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
        posts {
          nextToken
        }
        resources {
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const updatePost = /* GraphQL */ `
  mutation UpdatePost(
    $input: UpdatePostInput!
    $condition: ModelPostConditionInput
  ) {
    updatePost(input: $input, condition: $condition) {
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
        posts {
          nextToken
        }
        resources {
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const deletePost = /* GraphQL */ `
  mutation DeletePost(
    $input: DeletePostInput!
    $condition: ModelPostConditionInput
  ) {
    deletePost(input: $input, condition: $condition) {
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
        posts {
          nextToken
        }
        resources {
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const createFeed = /* GraphQL */ `
  mutation CreateFeed(
    $input: CreateFeedInput!
    $condition: ModelFeedConditionInput
  ) {
    createFeed(input: $input, condition: $condition) {
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
        posts {
          nextToken
        }
        resources {
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const updateFeed = /* GraphQL */ `
  mutation UpdateFeed(
    $input: UpdateFeedInput!
    $condition: ModelFeedConditionInput
  ) {
    updateFeed(input: $input, condition: $condition) {
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
        posts {
          nextToken
        }
        resources {
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const deleteFeed = /* GraphQL */ `
  mutation DeleteFeed(
    $input: DeleteFeedInput!
    $condition: ModelFeedConditionInput
  ) {
    deleteFeed(input: $input, condition: $condition) {
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
        posts {
          nextToken
        }
        resources {
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
