import { create } from 'zustand';
import { immer } from 'zustand/middleware/immer';
import { User } from './types/user.type';
import { devtools } from 'zustand/middleware';

interface AuthStore {
  isAuthOpen: boolean;
  isAuthed: boolean;
  userData: User | null;
  setIsAuthOpen: () => void;
  setUserData: (userData: User | null) => void;
  setIsAuthed: (toggle: boolean) => void;
  logout: () => void;
}

export const useAuthStore = create<AuthStore>()(
  devtools(
    immer((set) => ({
      isAuthOpen: false,
      isAuthed: false,
      userData: null,
      setIsAuthOpen: () =>
        set((state) => {
          state.isAuthOpen = !state.isAuthOpen;
        }),
      setUserData: (userData: User | null) =>
        set((state) => {
          state.userData = userData;
        }),
      setIsAuthed: (toggle: boolean) =>
        set((state) => {
          state.isAuthed = toggle;
        }),
      logout: () =>
        set((state) => {
          state.isAuthed = false;
          state.userData = null;
          localStorage.removeItem('accessToken');
        }),
    })),
  ),
);
