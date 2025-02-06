import { useEffect, useState } from "react";
import { useGetMember } from "../api/membersApi/membersApi";
import { IGetMemberResponse } from "../types/membersApi";

const useMembersHandler = () => {
  const { mutateAsync } = useGetMember()
  const [members, setMembers] = useState<[IGetMemberResponse] | null>(null)

  useEffect(() => {
    (async () => {
      const members = await mutateAsync()
      setMembers(members)
    })()
  }, [mutateAsync])

  return { members }
}

export default useMembersHandler
