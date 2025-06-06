import { useMutation } from '@tanstack/react-query';
import AuthApi from '../authApi';
import { AuthAnswer } from '../../model/types/authAnswer.type';
import { useAuthStore } from '../../model/useAuthStore';

export const useActivate = () => {
  const setUserData = useAuthStore((state) => state.setUserData);
  const setIsAuthed = useAuthStore((state) => state.setIsAuthed);

  return useMutation<AuthAnswer, Error, string>({
    mutationFn: AuthApi.activation,
    onError: () => {
      setUserData(null);
      setIsAuthed(false);
      localStorage.setItem('accessToken', '');
    },
  });
};
