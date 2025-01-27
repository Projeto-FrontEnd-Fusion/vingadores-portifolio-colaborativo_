import { useMutation } from '@tanstack/react-query';
import { usersInstance } from '../axiosInstance';
import { IPostUserRequest, IPostUserResponse } from '../../types/usersApi';

const createUser = async (data: IPostUserRequest): Promise<IPostUserResponse> => {
  const response = await usersInstance.post('/users', data);
  return response.data;
};

export const useCreateUser = () => {
  return useMutation<IPostUserResponse, Error, IPostUserRequest>({
    mutationFn: createUser,
  });
};
