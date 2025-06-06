import { useSearchParams } from 'react-router-dom';

export const useUrlPaginate = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const handleUrlPaginate = (key: string, value: string): void => {
    const newSearchParams = new URLSearchParams(searchParams);
    newSearchParams.set(key, value);
    setSearchParams(newSearchParams);
  };

  return { searchParams, handleUrlPaginate };
};
