import { useMutation } from '@tanstack/react-query';
import AuthApi from '../authApi';
import { useAuthStore } from '../../model/useAuthStore';
import { Dispatch, SetStateAction } from 'react';
import { AuthAnswer } from '../../model/types/authAnswer.type';
import { UserFields } from '../../model/types/userFields.type';

export const useSup = (setMessage: Dispatch<SetStateAction<string>>) => {
  const setIsAuthed = useAuthStore((state) => state.setIsAuthed);

  return useMutation<AuthAnswer, Error, UserFields>({
    mutationFn: AuthApi.registartion,
    onSuccess: (data: AuthAnswer) => {
      setIsAuthed(false);
      setMessage(data.message)
    },
    onError: (err: any) => {
      setMessage(err.response.data.message)
    }
  });
};
