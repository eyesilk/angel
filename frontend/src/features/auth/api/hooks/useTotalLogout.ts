import { useMutation } from '@tanstack/react-query';
import AuthApi from '../authApi';
import { useAuthStore } from '../../model/useAuthStore';

export const useTotalLogout = () => {
  const logout = useAuthStore((state) => state.logout);

  return useMutation<{ message: string }, Error>({
    mutationFn: AuthApi.totalLogout,
    onSettled: () => {
      logout();
      sessionStorage.removeItem('user');
    },
  });
};
