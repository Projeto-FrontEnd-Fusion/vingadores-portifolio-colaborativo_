import { useEffect } from "react";
import { useMemberStore } from "../store/useMemberStore";
import { IGetMemberResponse } from "../types/membersApi";

const useSelectedMember = (activeIndex: number, members: IGetMemberResponse[]) => {
  const setSelectedMember = useMemberStore((state) => state.setSelectedMember);

  useEffect(() => {
    if (members.length > 0) {
      setSelectedMember(members[activeIndex]);
    }
  }, [activeIndex, members, setSelectedMember]);
};

export default useSelectedMember;
