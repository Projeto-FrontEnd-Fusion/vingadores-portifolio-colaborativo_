import { useGetMember } from "../api/membersApi/membersApi";

const useMembersHandler = () => {
  const { data: members, error, isLoading } = useGetMember();

  return { members, error, isLoading };
}

export default useMembersHandler;
