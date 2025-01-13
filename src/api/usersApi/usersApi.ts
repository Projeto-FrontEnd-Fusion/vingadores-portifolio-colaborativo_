import { AxiosRequestConfig } from "axios"
import { usersInstance } from "../axiosInstance"
import { apiRequest } from "../apiRequest"
import { IPostUserRequest, IPostUserResponse } from "../../types/usersApi"

export const createUser = async (data: IPostUserRequest): Promise<IPostUserResponse> => {
  const config: AxiosRequestConfig = {
    method: 'POST',
    url: '/users',
    data: data
  }

  return await apiRequest<IPostUserResponse>(usersInstance, config)
}
