/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateResource = /* GraphQL */ `
  subscription OnCreateResource {
    onCreateResource {
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
          user {
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
export const onUpdateResource = /* GraphQL */ `
  subscription OnUpdateResource {
    onUpdateResource {
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
          user {
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
export const onDeleteResource = /* GraphQL */ `
  subscription OnDeleteResource {
    onDeleteResource {
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
          user {
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
export const onCreateResourceUser = /* GraphQL */ `
  subscription OnCreateResourceUser {
    onCreateResourceUser {
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
          items {
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
          items {
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
          nextToken
        }
        resources {
          items {
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
export const onUpdateResourceUser = /* GraphQL */ `
  subscription OnUpdateResourceUser {
    onUpdateResourceUser {
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
          items {
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
          items {
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
          nextToken
        }
        resources {
          items {
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
export const onDeleteResourceUser = /* GraphQL */ `
  subscription OnDeleteResourceUser {
    onDeleteResourceUser {
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
          items {
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
          items {
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
          nextToken
        }
        resources {
          items {
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
export const onCreateUser = /* GraphQL */ `
  subscription OnCreateUser {
    onCreateUser {
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
          user {
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
export const onUpdateUser = /* GraphQL */ `
  subscription OnUpdateUser {
    onUpdateUser {
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
          user {
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
export const onDeleteUser = /* GraphQL */ `
  subscription OnDeleteUser {
    onDeleteUser {
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
          user {
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
export const onCreateCategory = /* GraphQL */ `
  subscription OnCreateCategory {
    onCreateCategory {
      id
      name
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateCategory = /* GraphQL */ `
  subscription OnUpdateCategory {
    onUpdateCategory {
      id
      name
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteCategory = /* GraphQL */ `
  subscription OnDeleteCategory {
    onDeleteCategory {
      id
      name
      createdAt
      updatedAt
    }
  }
`;
export const onCreatePost = /* GraphQL */ `
  subscription OnCreatePost {
    onCreatePost {
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
          items {
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
          nextToken
        }
        resources {
          items {
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
export const onUpdatePost = /* GraphQL */ `
  subscription OnUpdatePost {
    onUpdatePost {
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
          items {
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
          nextToken
        }
        resources {
          items {
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
export const onDeletePost = /* GraphQL */ `
  subscription OnDeletePost {
    onDeletePost {
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
          items {
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
          nextToken
        }
        resources {
          items {
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
export const onCreateFeed = /* GraphQL */ `
  subscription OnCreateFeed {
    onCreateFeed {
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
          items {
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
          nextToken
        }
        resources {
          items {
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
export const onUpdateFeed = /* GraphQL */ `
  subscription OnUpdateFeed {
    onUpdateFeed {
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
          items {
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
          nextToken
        }
        resources {
          items {
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
export const onDeleteFeed = /* GraphQL */ `
  subscription OnDeleteFeed {
    onDeleteFeed {
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
          items {
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
          nextToken
        }
        resources {
          items {
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
