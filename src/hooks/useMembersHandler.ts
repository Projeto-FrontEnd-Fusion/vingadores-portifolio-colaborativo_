import { useEffect } from "react";
import { useGetMember } from "../api/membersApi/membersApi";
import { useUserStore } from "../store/useUserStore";

const useMembersHandler = () => {
  const { data: members, error, isLoading } = useGetMember();
  const setUsers = useUserStore((state) => state.setUsers);


  useEffect(() => {
    if (members) {
      setUsers(members);
    }
  }, [members, setUsers]);

  return { members, error, isLoading };
};

export default useMembersHandler;
