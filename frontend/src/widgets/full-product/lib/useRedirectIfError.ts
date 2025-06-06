import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export const useRefirectIfError = (isError: boolean) => {
  const navigate = useNavigate();

  useEffect(() => {
    if (isError) {
      navigate('/not-found');
    }
  }, [isError]);
};
