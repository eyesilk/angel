import { useMutation } from '@tanstack/react-query';
import AuthApi from '../authApi';
import { FormEvent, useState } from 'react';
import { AuthAnswer } from '../../model/types/authAnswer.type';
import { saveUser } from '../../lib/saveUser';

export const useChangePass = (onClose: () => void) => {
  const [message, setMessage] = useState<string>('');

  const { mutateAsync, isPending, isError } = useMutation<
    AuthAnswer,
    Error,
    { password: string; newPassword: string }
  >({
    mutationFn: AuthApi.changePassowrd,
    onSuccess: (data: AuthAnswer) => {
      saveUser(data.user);
      localStorage.setItem('accessToken', data.tokens.accessToken);
      onClose();
      location.reload();
    },
    onError: (err: any) => {
      setMessage(err.response.data.message);
    },
  });

  const handleChangePassword = async (e: FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);

    const password: string = formData.get('password') as string;
    const newPassword: string = formData.get('newPassword') as string;

    await mutateAsync({ password, newPassword });
  };

  return { handleChangePassword, isPending, isError, message };
};
