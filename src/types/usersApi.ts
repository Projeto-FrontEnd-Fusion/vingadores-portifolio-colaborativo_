interface IPostUserRequest {
  name: string
  lastName: string
  email: string
  position: string
  description: string
}

interface IPostUserResponse extends IPostUserRequest {
  id: string
}


export type { IPostUserRequest, IPostUserResponse }
