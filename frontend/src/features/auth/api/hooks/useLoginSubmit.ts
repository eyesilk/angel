import { FormEvent, useState } from 'react';
import { useSin } from './useSin';

export const useLoginSubmit = () => {
  const [message, setMessage] = useState<string>('');

  const { mutateAsync, isPending, isSuccess } = useSin(setMessage);

  const handleLoginSubmit = async (e: FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);

    const email: string = formData.get('email') as string;
    const password: string = formData.get('password') as string;
 
    await mutateAsync({
      email,
      password,
    });
  };

  return { handleLoginSubmit, message, isPending, isSuccess };
};
