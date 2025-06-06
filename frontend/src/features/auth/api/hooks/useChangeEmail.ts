import { useMutation } from '@tanstack/react-query';
import AuthApi from '../authApi';
import { FormEvent, useState } from 'react';

export const useChangeEmail = () => {
  const [message, setMessage] = useState<string>('');

  const { mutateAsync, isPending, isError } = useMutation<
    { message: string},
    Error,
    { password: string; email: string }
  >({
    mutationFn: AuthApi.changeEmail,
    onSuccess: (data: { message: string}) => {
        setMessage(data.message);
    },
    onError: (err: any) => {
      setMessage(err.response.data.message);
    },
  });

  const handleChangeEmail = async (e: FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);

    const password: string = formData.get('password') as string;
    const email: string = formData.get('email') as string;

    await mutateAsync({ password, email });
  };

  return { handleChangeEmail, isPending, isError, message };
};
