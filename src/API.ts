/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateResourceInput = {
  id?: string | null,
  categoryId: string,
  userId: string,
  title: string,
  url: string,
};

export type ModelResourceConditionInput = {
  categoryId?: ModelIDInput | null,
  userId?: ModelIDInput | null,
  title?: ModelStringInput | null,
  url?: ModelStringInput | null,
  and?: Array< ModelResourceConditionInput | null > | null,
  or?: Array< ModelResourceConditionInput | null > | null,
  not?: ModelResourceConditionInput | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type Resource = {
  __typename: "Resource",
  id: string,
  categoryId: string,
  userId: string,
  title: string,
  url: string,
  category?: Category | null,
  users?: ModelResourceUserConnection | null,
  createdAt: string,
  updatedAt: string,
};

export type Category = {
  __typename: "Category",
  id: string,
  name: string,
  createdAt: string,
  updatedAt: string,
};

export type ModelResourceUserConnection = {
  __typename: "ModelResourceUserConnection",
  items:  Array<ResourceUser >,
  nextToken?: string | null,
};

export type ResourceUser = {
  __typename: "ResourceUser",
  id: string,
  resourceId: string,
  resource: Resource,
  userId: string,
  user: User,
  createdAt: string,
  updatedAt: string,
};

export type User = {
  __typename: "User",
  id: string,
  name: string,
  email: string,
  profileImagePath: string,
  progressRate: number,
  resourcesCount: number,
  posts?: ModelPostConnection | null,
  resources?: ModelResourceUserConnection | null,
  createdAt: string,
  updatedAt: string,
};

export type ModelPostConnection = {
  __typename: "ModelPostConnection",
  items:  Array<Post >,
  nextToken?: string | null,
};

export type Post = {
  __typename: "Post",
  id: string,
  categoryId: string,
  userId: string,
  title: string,
  content: string,
  category?: Category | null,
  user?: User | null,
  createdAt: string,
  updatedAt: string,
};

export type UpdateResourceInput = {
  id: string,
  categoryId?: string | null,
  userId?: string | null,
  title?: string | null,
  url?: string | null,
};

export type DeleteResourceInput = {
  id: string,
};

export type CreateResourceUserInput = {
  id?: string | null,
  resourceId: string,
  userId: string,
};

export type ModelResourceUserConditionInput = {
  resourceId?: ModelIDInput | null,
  userId?: ModelIDInput | null,
  and?: Array< ModelResourceUserConditionInput | null > | null,
  or?: Array< ModelResourceUserConditionInput | null > | null,
  not?: ModelResourceUserConditionInput | null,
};

export type UpdateResourceUserInput = {
  id: string,
  resourceId?: string | null,
  userId?: string | null,
};

export type DeleteResourceUserInput = {
  id: string,
};

export type CreateUserInput = {
  id?: string | null,
  name: string,
  email: string,
  profileImagePath: string,
  progressRate: number,
  resourcesCount: number,
};

export type ModelUserConditionInput = {
  name?: ModelStringInput | null,
  email?: ModelStringInput | null,
  profileImagePath?: ModelStringInput | null,
  progressRate?: ModelIntInput | null,
  resourcesCount?: ModelIntInput | null,
  and?: Array< ModelUserConditionInput | null > | null,
  or?: Array< ModelUserConditionInput | null > | null,
  not?: ModelUserConditionInput | null,
};

export type ModelIntInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type UpdateUserInput = {
  id: string,
  name?: string | null,
  email?: string | null,
  profileImagePath?: string | null,
  progressRate?: number | null,
  resourcesCount?: number | null,
};

export type DeleteUserInput = {
  id: string,
};

export type CreateCategoryInput = {
  id?: string | null,
  name: string,
};

export type ModelCategoryConditionInput = {
  name?: ModelStringInput | null,
  and?: Array< ModelCategoryConditionInput | null > | null,
  or?: Array< ModelCategoryConditionInput | null > | null,
  not?: ModelCategoryConditionInput | null,
};

export type UpdateCategoryInput = {
  id: string,
  name?: string | null,
};

export type DeleteCategoryInput = {
  id: string,
};

export type CreatePostInput = {
  id?: string | null,
  categoryId: string,
  userId: string,
  title: string,
  content: string,
};

export type ModelPostConditionInput = {
  categoryId?: ModelIDInput | null,
  userId?: ModelIDInput | null,
  title?: ModelStringInput | null,
  content?: ModelStringInput | null,
  and?: Array< ModelPostConditionInput | null > | null,
  or?: Array< ModelPostConditionInput | null > | null,
  not?: ModelPostConditionInput | null,
};

export type UpdatePostInput = {
  id: string,
  categoryId?: string | null,
  userId?: string | null,
  title?: string | null,
  content?: string | null,
};

export type DeletePostInput = {
  id: string,
};

export type CreateFeedInput = {
  id?: string | null,
  categoryId: string,
  userId: string,
  text: string,
};

export type ModelFeedConditionInput = {
  categoryId?: ModelIDInput | null,
  userId?: ModelIDInput | null,
  text?: ModelStringInput | null,
  and?: Array< ModelFeedConditionInput | null > | null,
  or?: Array< ModelFeedConditionInput | null > | null,
  not?: ModelFeedConditionInput | null,
};

export type Feed = {
  __typename: "Feed",
  id: string,
  categoryId: string,
  userId: string,
  text: string,
  category?: Category | null,
  user?: User | null,
  createdAt: string,
  updatedAt: string,
};

export type UpdateFeedInput = {
  id: string,
  categoryId?: string | null,
  userId?: string | null,
  text?: string | null,
};

export type DeleteFeedInput = {
  id: string,
};

export type ModelResourceFilterInput = {
  id?: ModelIDInput | null,
  categoryId?: ModelIDInput | null,
  userId?: ModelIDInput | null,
  title?: ModelStringInput | null,
  url?: ModelStringInput | null,
  and?: Array< ModelResourceFilterInput | null > | null,
  or?: Array< ModelResourceFilterInput | null > | null,
  not?: ModelResourceFilterInput | null,
};

export type ModelResourceConnection = {
  __typename: "ModelResourceConnection",
  items:  Array<Resource >,
  nextToken?: string | null,
};

export type ModelUserFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  email?: ModelStringInput | null,
  profileImagePath?: ModelStringInput | null,
  progressRate?: ModelIntInput | null,
  resourcesCount?: ModelIntInput | null,
  and?: Array< ModelUserFilterInput | null > | null,
  or?: Array< ModelUserFilterInput | null > | null,
  not?: ModelUserFilterInput | null,
};

export type ModelUserConnection = {
  __typename: "ModelUserConnection",
  items:  Array<User >,
  nextToken?: string | null,
};

export type ModelCategoryFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  and?: Array< ModelCategoryFilterInput | null > | null,
  or?: Array< ModelCategoryFilterInput | null > | null,
  not?: ModelCategoryFilterInput | null,
};

export type ModelCategoryConnection = {
  __typename: "ModelCategoryConnection",
  items:  Array<Category >,
  nextToken?: string | null,
};

export type ModelPostFilterInput = {
  id?: ModelIDInput | null,
  categoryId?: ModelIDInput | null,
  userId?: ModelIDInput | null,
  title?: ModelStringInput | null,
  content?: ModelStringInput | null,
  and?: Array< ModelPostFilterInput | null > | null,
  or?: Array< ModelPostFilterInput | null > | null,
  not?: ModelPostFilterInput | null,
};

export type ModelFeedFilterInput = {
  id?: ModelIDInput | null,
  categoryId?: ModelIDInput | null,
  userId?: ModelIDInput | null,
  text?: ModelStringInput | null,
  and?: Array< ModelFeedFilterInput | null > | null,
  or?: Array< ModelFeedFilterInput | null > | null,
  not?: ModelFeedFilterInput | null,
};

export type ModelFeedConnection = {
  __typename: "ModelFeedConnection",
  items:  Array<Feed >,
  nextToken?: string | null,
};

export type CreateResourceMutationVariables = {
  input: CreateResourceInput,
  condition?: ModelResourceConditionInput | null,
};

export type CreateResourceMutation = {
  createResource?:  {
    __typename: "Resource",
    id: string,
    categoryId: string,
    userId: string,
    title: string,
    url: string,
    category?:  {
      __typename: "Category",
      id: string,
      name: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    users?:  {
      __typename: "ModelResourceUserConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateResourceMutationVariables = {
  input: UpdateResourceInput,
  condition?: ModelResourceConditionInput | null,
};

export type UpdateResourceMutation = {
  updateResource?:  {
    __typename: "Resource",
    id: string,
    categoryId: string,
    userId: string,
    title: string,
    url: string,
    category?:  {
      __typename: "Category",
      id: string,
      name: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    users?:  {
      __typename: "ModelResourceUserConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteResourceMutationVariables = {
  input: DeleteResourceInput,
  condition?: ModelResourceConditionInput | null,
};

export type DeleteResourceMutation = {
  deleteResource?:  {
    __typename: "Resource",
    id: string,
    categoryId: string,
    userId: string,
    title: string,
    url: string,
    category?:  {
      __typename: "Category",
      id: string,
      name: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    users?:  {
      __typename: "ModelResourceUserConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateResourceUserMutationVariables = {
  input: CreateResourceUserInput,
  condition?: ModelResourceUserConditionInput | null,
};

export type CreateResourceUserMutation = {
  createResourceUser?:  {
    __typename: "ResourceUser",
    id: string,
    resourceId: string,
    resource:  {
      __typename: "Resource",
      id: string,
      categoryId: string,
      userId: string,
      title: string,
      url: string,
      createdAt: string,
      updatedAt: string,
    },
    userId: string,
    user:  {
      __typename: "User",
      id: string,
      name: string,
      email: string,
      profileImagePath: string,
      progressRate: number,
      resourcesCount: number,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateResourceUserMutationVariables = {
  input: UpdateResourceUserInput,
  condition?: ModelResourceUserConditionInput | null,
};

export type UpdateResourceUserMutation = {
  updateResourceUser?:  {
    __typename: "ResourceUser",
    id: string,
    resourceId: string,
    resource:  {
      __typename: "Resource",
      id: string,
      categoryId: string,
      userId: string,
      title: string,
      url: string,
      createdAt: string,
      updatedAt: string,
    },
    userId: string,
    user:  {
      __typename: "User",
      id: string,
      name: string,
      email: string,
      profileImagePath: string,
      progressRate: number,
      resourcesCount: number,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteResourceUserMutationVariables = {
  input: DeleteResourceUserInput,
  condition?: ModelResourceUserConditionInput | null,
};

export type DeleteResourceUserMutation = {
  deleteResourceUser?:  {
    __typename: "ResourceUser",
    id: string,
    resourceId: string,
    resource:  {
      __typename: "Resource",
      id: string,
      categoryId: string,
      userId: string,
      title: string,
      url: string,
      createdAt: string,
      updatedAt: string,
    },
    userId: string,
    user:  {
      __typename: "User",
      id: string,
      name: string,
      email: string,
      profileImagePath: string,
      progressRate: number,
      resourcesCount: number,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateUserMutationVariables = {
  input: CreateUserInput,
  condition?: ModelUserConditionInput | null,
};

export type CreateUserMutation = {
  createUser?:  {
    __typename: "User",
    id: string,
    name: string,
    email: string,
    profileImagePath: string,
    progressRate: number,
    resourcesCount: number,
    posts?:  {
      __typename: "ModelPostConnection",
      nextToken?: string | null,
    } | null,
    resources?:  {
      __typename: "ModelResourceUserConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateUserMutationVariables = {
  input: UpdateUserInput,
  condition?: ModelUserConditionInput | null,
};

export type UpdateUserMutation = {
  updateUser?:  {
    __typename: "User",
    id: string,
    name: string,
    email: string,
    profileImagePath: string,
    progressRate: number,
    resourcesCount: number,
    posts?:  {
      __typename: "ModelPostConnection",
      nextToken?: string | null,
    } | null,
    resources?:  {
      __typename: "ModelResourceUserConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteUserMutationVariables = {
  input: DeleteUserInput,
  condition?: ModelUserConditionInput | null,
};

export type DeleteUserMutation = {
  deleteUser?:  {
    __typename: "User",
    id: string,
    name: string,
    email: string,
    profileImagePath: string,
    progressRate: number,
    resourcesCount: number,
    posts?:  {
      __typename: "ModelPostConnection",
      nextToken?: string | null,
    } | null,
    resources?:  {
      __typename: "ModelResourceUserConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateCategoryMutationVariables = {
  input: CreateCategoryInput,
  condition?: ModelCategoryConditionInput | null,
};

export type CreateCategoryMutation = {
  createCategory?:  {
    __typename: "Category",
    id: string,
    name: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateCategoryMutationVariables = {
  input: UpdateCategoryInput,
  condition?: ModelCategoryConditionInput | null,
};

export type UpdateCategoryMutation = {
  updateCategory?:  {
    __typename: "Category",
    id: string,
    name: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteCategoryMutationVariables = {
  input: DeleteCategoryInput,
  condition?: ModelCategoryConditionInput | null,
};

export type DeleteCategoryMutation = {
  deleteCategory?:  {
    __typename: "Category",
    id: string,
    name: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreatePostMutationVariables = {
  input: CreatePostInput,
  condition?: ModelPostConditionInput | null,
};

export type CreatePostMutation = {
  createPost?:  {
    __typename: "Post",
    id: string,
    categoryId: string,
    userId: string,
    title: string,
    content: string,
    category?:  {
      __typename: "Category",
      id: string,
      name: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    user?:  {
      __typename: "User",
      id: string,
      name: string,
      email: string,
      profileImagePath: string,
      progressRate: number,
      resourcesCount: number,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdatePostMutationVariables = {
  input: UpdatePostInput,
  condition?: ModelPostConditionInput | null,
};

export type UpdatePostMutation = {
  updatePost?:  {
    __typename: "Post",
    id: string,
    categoryId: string,
    userId: string,
    title: string,
    content: string,
    category?:  {
      __typename: "Category",
      id: string,
      name: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    user?:  {
      __typename: "User",
      id: string,
      name: string,
      email: string,
      profileImagePath: string,
      progressRate: number,
      resourcesCount: number,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeletePostMutationVariables = {
  input: DeletePostInput,
  condition?: ModelPostConditionInput | null,
};

export type DeletePostMutation = {
  deletePost?:  {
    __typename: "Post",
    id: string,
    categoryId: string,
    userId: string,
    title: string,
    content: string,
    category?:  {
      __typename: "Category",
      id: string,
      name: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    user?:  {
      __typename: "User",
      id: string,
      name: string,
      email: string,
      profileImagePath: string,
      progressRate: number,
      resourcesCount: number,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateFeedMutationVariables = {
  input: CreateFeedInput,
  condition?: ModelFeedConditionInput | null,
};

export type CreateFeedMutation = {
  createFeed?:  {
    __typename: "Feed",
    id: string,
    categoryId: string,
    userId: string,
    text: string,
    category?:  {
      __typename: "Category",
      id: string,
      name: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    user?:  {
      __typename: "User",
      id: string,
      name: string,
      email: string,
      profileImagePath: string,
      progressRate: number,
      resourcesCount: number,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateFeedMutationVariables = {
  input: UpdateFeedInput,
  condition?: ModelFeedConditionInput | null,
};

export type UpdateFeedMutation = {
  updateFeed?:  {
    __typename: "Feed",
    id: string,
    categoryId: string,
    userId: string,
    text: string,
    category?:  {
      __typename: "Category",
      id: string,
      name: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    user?:  {
      __typename: "User",
      id: string,
      name: string,
      email: string,
      profileImagePath: string,
      progressRate: number,
      resourcesCount: number,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteFeedMutationVariables = {
  input: DeleteFeedInput,
  condition?: ModelFeedConditionInput | null,
};

export type DeleteFeedMutation = {
  deleteFeed?:  {
    __typename: "Feed",
    id: string,
    categoryId: string,
    userId: string,
    text: string,
    category?:  {
      __typename: "Category",
      id: string,
      name: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    user?:  {
      __typename: "User",
      id: string,
      name: string,
      email: string,
      profileImagePath: string,
      progressRate: number,
      resourcesCount: number,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type GetResourceQueryVariables = {
  id: string,
};

export type GetResourceQuery = {
  getResource?:  {
    __typename: "Resource",
    id: string,
    categoryId: string,
    userId: string,
    title: string,
    url: string,
    category?:  {
      __typename: "Category",
      id: string,
      name: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    users?:  {
      __typename: "ModelResourceUserConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListResourcesQueryVariables = {
  filter?: ModelResourceFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListResourcesQuery = {
  listResources?:  {
    __typename: "ModelResourceConnection",
    items:  Array< {
      __typename: "Resource",
      id: string,
      categoryId: string,
      userId: string,
      title: string,
      url: string,
      createdAt: string,
      updatedAt: string,
    } >,
    nextToken?: string | null,
  } | null,
};

export type GetUserQueryVariables = {
  id: string,
};

export type GetUserQuery = {
  getUser?:  {
    __typename: "User",
    id: string,
    name: string,
    email: string,
    profileImagePath: string,
    progressRate: number,
    resourcesCount: number,
    posts?:  {
      __typename: "ModelPostConnection",
      nextToken?: string | null,
    } | null,
    resources?:  {
      __typename: "ModelResourceUserConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListUsersQueryVariables = {
  filter?: ModelUserFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListUsersQuery = {
  listUsers?:  {
    __typename: "ModelUserConnection",
    items:  Array< {
      __typename: "User",
      id: string,
      name: string,
      email: string,
      profileImagePath: string,
      progressRate: number,
      resourcesCount: number,
      createdAt: string,
      updatedAt: string,
    } >,
    nextToken?: string | null,
  } | null,
};

export type GetCategoryQueryVariables = {
  id: string,
};

export type GetCategoryQuery = {
  getCategory?:  {
    __typename: "Category",
    id: string,
    name: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListCategorysQueryVariables = {
  filter?: ModelCategoryFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListCategorysQuery = {
  listCategorys?:  {
    __typename: "ModelCategoryConnection",
    items:  Array< {
      __typename: "Category",
      id: string,
      name: string,
      createdAt: string,
      updatedAt: string,
    } >,
    nextToken?: string | null,
  } | null,
};

export type GetPostQueryVariables = {
  id: string,
};

export type GetPostQuery = {
  getPost?:  {
    __typename: "Post",
    id: string,
    categoryId: string,
    userId: string,
    title: string,
    content: string,
    category?:  {
      __typename: "Category",
      id: string,
      name: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    user?:  {
      __typename: "User",
      id: string,
      name: string,
      email: string,
      profileImagePath: string,
      progressRate: number,
      resourcesCount: number,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListPostsQueryVariables = {
  filter?: ModelPostFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListPostsQuery = {
  listPosts?:  {
    __typename: "ModelPostConnection",
    items:  Array< {
      __typename: "Post",
      id: string,
      categoryId: string,
      userId: string,
      title: string,
      content: string,
      createdAt: string,
      updatedAt: string,
    } >,
    nextToken?: string | null,
  } | null,
};

export type GetFeedQueryVariables = {
  id: string,
};

export type GetFeedQuery = {
  getFeed?:  {
    __typename: "Feed",
    id: string,
    categoryId: string,
    userId: string,
    text: string,
    category?:  {
      __typename: "Category",
      id: string,
      name: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    user?:  {
      __typename: "User",
      id: string,
      name: string,
      email: string,
      profileImagePath: string,
      progressRate: number,
      resourcesCount: number,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListFeedsQueryVariables = {
  filter?: ModelFeedFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListFeedsQuery = {
  listFeeds?:  {
    __typename: "ModelFeedConnection",
    items:  Array< {
      __typename: "Feed",
      id: string,
      categoryId: string,
      userId: string,
      text: string,
      createdAt: string,
      updatedAt: string,
    } >,
    nextToken?: string | null,
  } | null,
};

export type OnCreateResourceSubscription = {
  onCreateResource?:  {
    __typename: "Resource",
    id: string,
    categoryId: string,
    userId: string,
    title: string,
    url: string,
    category?:  {
      __typename: "Category",
      id: string,
      name: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    users?:  {
      __typename: "ModelResourceUserConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateResourceSubscription = {
  onUpdateResource?:  {
    __typename: "Resource",
    id: string,
    categoryId: string,
    userId: string,
    title: string,
    url: string,
    category?:  {
      __typename: "Category",
      id: string,
      name: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    users?:  {
      __typename: "ModelResourceUserConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteResourceSubscription = {
  onDeleteResource?:  {
    __typename: "Resource",
    id: string,
    categoryId: string,
    userId: string,
    title: string,
    url: string,
    category?:  {
      __typename: "Category",
      id: string,
      name: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    users?:  {
      __typename: "ModelResourceUserConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateResourceUserSubscription = {
  onCreateResourceUser?:  {
    __typename: "ResourceUser",
    id: string,
    resourceId: string,
    resource:  {
      __typename: "Resource",
      id: string,
      categoryId: string,
      userId: string,
      title: string,
      url: string,
      createdAt: string,
      updatedAt: string,
    },
    userId: string,
    user:  {
      __typename: "User",
      id: string,
      name: string,
      email: string,
      profileImagePath: string,
      progressRate: number,
      resourcesCount: number,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateResourceUserSubscription = {
  onUpdateResourceUser?:  {
    __typename: "ResourceUser",
    id: string,
    resourceId: string,
    resource:  {
      __typename: "Resource",
      id: string,
      categoryId: string,
      userId: string,
      title: string,
      url: string,
      createdAt: string,
      updatedAt: string,
    },
    userId: string,
    user:  {
      __typename: "User",
      id: string,
      name: string,
      email: string,
      profileImagePath: string,
      progressRate: number,
      resourcesCount: number,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteResourceUserSubscription = {
  onDeleteResourceUser?:  {
    __typename: "ResourceUser",
    id: string,
    resourceId: string,
    resource:  {
      __typename: "Resource",
      id: string,
      categoryId: string,
      userId: string,
      title: string,
      url: string,
      createdAt: string,
      updatedAt: string,
    },
    userId: string,
    user:  {
      __typename: "User",
      id: string,
      name: string,
      email: string,
      profileImagePath: string,
      progressRate: number,
      resourcesCount: number,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateUserSubscription = {
  onCreateUser?:  {
    __typename: "User",
    id: string,
    name: string,
    email: string,
    profileImagePath: string,
    progressRate: number,
    resourcesCount: number,
    posts?:  {
      __typename: "ModelPostConnection",
      nextToken?: string | null,
    } | null,
    resources?:  {
      __typename: "ModelResourceUserConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateUserSubscription = {
  onUpdateUser?:  {
    __typename: "User",
    id: string,
    name: string,
    email: string,
    profileImagePath: string,
    progressRate: number,
    resourcesCount: number,
    posts?:  {
      __typename: "ModelPostConnection",
      nextToken?: string | null,
    } | null,
    resources?:  {
      __typename: "ModelResourceUserConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteUserSubscription = {
  onDeleteUser?:  {
    __typename: "User",
    id: string,
    name: string,
    email: string,
    profileImagePath: string,
    progressRate: number,
    resourcesCount: number,
    posts?:  {
      __typename: "ModelPostConnection",
      nextToken?: string | null,
    } | null,
    resources?:  {
      __typename: "ModelResourceUserConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateCategorySubscription = {
  onCreateCategory?:  {
    __typename: "Category",
    id: string,
    name: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateCategorySubscription = {
  onUpdateCategory?:  {
    __typename: "Category",
    id: string,
    name: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteCategorySubscription = {
  onDeleteCategory?:  {
    __typename: "Category",
    id: string,
    name: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreatePostSubscription = {
  onCreatePost?:  {
    __typename: "Post",
    id: string,
    categoryId: string,
    userId: string,
    title: string,
    content: string,
    category?:  {
      __typename: "Category",
      id: string,
      name: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    user?:  {
      __typename: "User",
      id: string,
      name: string,
      email: string,
      profileImagePath: string,
      progressRate: number,
      resourcesCount: number,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdatePostSubscription = {
  onUpdatePost?:  {
    __typename: "Post",
    id: string,
    categoryId: string,
    userId: string,
    title: string,
    content: string,
    category?:  {
      __typename: "Category",
      id: string,
      name: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    user?:  {
      __typename: "User",
      id: string,
      name: string,
      email: string,
      profileImagePath: string,
      progressRate: number,
      resourcesCount: number,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeletePostSubscription = {
  onDeletePost?:  {
    __typename: "Post",
    id: string,
    categoryId: string,
    userId: string,
    title: string,
    content: string,
    category?:  {
      __typename: "Category",
      id: string,
      name: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    user?:  {
      __typename: "User",
      id: string,
      name: string,
      email: string,
      profileImagePath: string,
      progressRate: number,
      resourcesCount: number,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateFeedSubscription = {
  onCreateFeed?:  {
    __typename: "Feed",
    id: string,
    categoryId: string,
    userId: string,
    text: string,
    category?:  {
      __typename: "Category",
      id: string,
      name: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    user?:  {
      __typename: "User",
      id: string,
      name: string,
      email: string,
      profileImagePath: string,
      progressRate: number,
      resourcesCount: number,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateFeedSubscription = {
  onUpdateFeed?:  {
    __typename: "Feed",
    id: string,
    categoryId: string,
    userId: string,
    text: string,
    category?:  {
      __typename: "Category",
      id: string,
      name: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    user?:  {
      __typename: "User",
      id: string,
      name: string,
      email: string,
      profileImagePath: string,
      progressRate: number,
      resourcesCount: number,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteFeedSubscription = {
  onDeleteFeed?:  {
    __typename: "Feed",
    id: string,
    categoryId: string,
    userId: string,
    text: string,
    category?:  {
      __typename: "Category",
      id: string,
      name: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    user?:  {
      __typename: "User",
      id: string,
      name: string,
      email: string,
      profileImagePath: string,
      progressRate: number,
      resourcesCount: number,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};
