import { useQuery } from "@tanstack/react-query";
import { IGetMemberResponse } from "../../types/membersApi";
import { membersInstance } from "../axiosInstance";

const getMember = async (): Promise<[IGetMemberResponse]> => {
  const response = await membersInstance.get('/members')
  return response.data
}

export const useGetMember = () => {
  return useQuery<[IGetMemberResponse], Error>({
    queryKey: ['members'],
    queryFn: getMember,
  },)
}
