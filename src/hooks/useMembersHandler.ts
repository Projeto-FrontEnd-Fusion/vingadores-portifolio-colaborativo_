import { useEffect } from "react";
import { useGetMember } from "../api/membersApi/membersApi";
import { useMemberStore } from "../store/useMemberStore";

const useMembersHandler = () => {
  const { data: members, error, isLoading } = useGetMember();
  const setMembers = useMemberStore((state) => state.setMembers);

  useEffect(() => {
    if (members && members.length > 0) {
      setMembers(members);
    }
  }, [members, setMembers]);

  return { members, error, isLoading };
};

export default useMembersHandler;
