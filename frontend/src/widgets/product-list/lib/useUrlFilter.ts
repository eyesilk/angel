import { useSearchParams } from 'react-router-dom';

export const useUrlFilter = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const handleUrlFilter = (key: string, value: string): void => {
    const newSearchParams = new URLSearchParams(searchParams);
    newSearchParams.set(key, value);
    newSearchParams.set("page", "1");
    setSearchParams(newSearchParams);
  };

  return { searchParams, handleUrlFilter };
};
