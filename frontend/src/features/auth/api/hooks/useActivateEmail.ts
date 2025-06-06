import { useMutation } from '@tanstack/react-query';
import { useAuthStore } from '../../model/useAuthStore';
import { AuthAnswer } from '../../model/types/authAnswer.type';
import AuthApi from '../authApi';
import { saveUser } from '../../lib/saveUser';

export const useActivateEmail = () => {
  const setUserData = useAuthStore((state) => state.setUserData);
  const setIsAuthed = useAuthStore((state) => state.setIsAuthed);

  return useMutation<AuthAnswer, Error, string>({
    mutationFn: AuthApi.activationEmail,
    onSuccess: (data: AuthAnswer) => {
      saveUser(data.user);
      localStorage.setItem('accessToken', data.tokens.accessToken);
    },
    onError: () => {
      setUserData(null);
      setIsAuthed(false);
      localStorage.setItem('accessToken', '');
    },
  });
};
