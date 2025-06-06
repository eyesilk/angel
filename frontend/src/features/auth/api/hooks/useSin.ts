import { useMutation } from '@tanstack/react-query';
import AuthApi from '../authApi';
import { useAuthStore } from '../../model/useAuthStore';
import { Dispatch, SetStateAction } from 'react';
import { AuthAnswer } from '../../model/types/authAnswer.type';
import { LoginFields } from '../../model/types/loginFields.type';

export const useSin = (setMessage: Dispatch<SetStateAction<string>>) => {
  const setIsAuthed = useAuthStore((state) => state.setIsAuthed);
  const setUserData = useAuthStore((state) => state.setUserData);

  return useMutation<AuthAnswer, Error, LoginFields>({
    mutationFn: AuthApi.login,
    onSuccess: (data: AuthAnswer) => {
      setIsAuthed(true);
      setUserData(data.user);
      localStorage.setItem('accessToken', data.tokens.accessToken);
      location.reload();
    },
    onError: (err: any) => {
      setMessage(err.response.data.message);
    },
  });
};
