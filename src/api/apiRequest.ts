import axios, { AxiosRequestConfig, AxiosInstance } from "axios"

export const apiRequest = async <T>(api: AxiosInstance, config: AxiosRequestConfig): Promise<T> => {
  try {
    const response = await api(config)
    return response.data
  } catch (error) {
    console.log(error)
    throw error
  }
}
