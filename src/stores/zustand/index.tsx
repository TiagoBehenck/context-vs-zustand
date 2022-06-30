import create from 'zustand';
import { persist } from 'zustand/middleware';

type User = {
  fullName: string;
  email: string;
  score: number;
};

interface IUserContext {
  user: User;
  updateUser: (user: Partial<User>) => void;
}

export const useStore = create<IUserContext>(
  persist(
    (set, get) => ({
      user: {
        fullName: '',
        score: 0,
        email: '',
        otherProp: '2',
      },
      updateUser: (user: Partial<User>) => {
        set((state) => ({
          user: {
            ...state.user,
            ...user,
          },
        }));
      },
    }),
    {
      name: 'awesome-storage',
    },
  ),
);
