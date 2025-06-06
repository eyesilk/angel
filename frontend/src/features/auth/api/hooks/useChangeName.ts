import { useMutation } from '@tanstack/react-query';
import AuthApi from '../authApi';
import { FormEvent, useState } from 'react';
import { AuthAnswer } from '../../model/types/authAnswer.type';
import { saveUser } from '../../lib/saveUser';

export const useChangeName = (onClose: () => void) => {
  const [message, setMessage] = useState<string>('');

  const { mutateAsync, isPending, isError } = useMutation<AuthAnswer, Error, string>({
    mutationFn: AuthApi.changeUsername,
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

  const handleChangeName = async (e: FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);

    const username: string = formData.get('username') as string;

    await mutateAsync(username);
  };

  return { handleChangeName, isPending, isError, message };
};
