import { create } from "zustand";
import { IGetMemberResponse } from "../types/membersApi";

interface UserStore {
    users: IGetMemberResponse[];
    selectedUser: IGetMemberResponse | null;
    setUsers: (users: IGetMemberResponse[]) => void;
    setSelectedUser: (user: IGetMemberResponse | null) => void;
}

export const useUserStore = create<UserStore>((set) => ({
    users: [],
    selectedUser: null,
    setUsers: (users) => set({ users }),
    setSelectedUser: (user) => set({ selectedUser: user }),
}));
