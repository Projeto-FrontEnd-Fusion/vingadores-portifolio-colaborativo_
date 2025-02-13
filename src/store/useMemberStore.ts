import { create } from "zustand";
import { IGetMemberResponse } from "../types/membersApi";

interface MemberStore {
    members: IGetMemberResponse[];
    selectedMember: IGetMemberResponse | null;
    setMembers: (members: IGetMemberResponse[]) => void;
    setSelectedMember: (member: IGetMemberResponse | null) => void;
}

export const useMemberStore = create<MemberStore>((set) => ({
    members: [],
    selectedMember: null,
    setMembers: (members) => set({ members }),
    setSelectedMember: (member) => set({ selectedMember: member }),
}));
