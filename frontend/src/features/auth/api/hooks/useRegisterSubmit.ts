import { FormEvent, useState } from 'react';
import { useSup } from './useSup';

export const useRegisterSubmit = () => {
  const [message, setMessage] = useState<string>('');

  const { mutateAsync, isPending } = useSup(setMessage);

  const handleRegisterSubmit = async (e: FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);

    const username: string = formData.get('username') as string;
    const email: string = formData.get('email') as string;
    const password: string = formData.get('password') as string;

    await mutateAsync({
      username,
      email,
      password,
    });
  };

  return {handleRegisterSubmit, message, isPending}
};
