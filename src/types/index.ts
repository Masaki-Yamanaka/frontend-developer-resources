export type UserInfo = {
  id: string,
  name: string,
  email: string,
  profileImagePath: string,
  progressRate: number,
  resourcesCount: number,
  posts?: []
  createdAt?: string,
  updatedAt?: string,
}