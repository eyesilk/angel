import { useSearchParams } from 'react-router-dom';

export const useUrlSort = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const handleUrlSort = (
    sortValue: string,
    orderValue: string,
  ): void => {
    const newSearchParams = new URLSearchParams(window.location.search);
    newSearchParams.set("sortBy", sortValue);
    newSearchParams.set("order", orderValue);

    setSearchParams(newSearchParams);
  };

  return {
    searchParams,
    handleUrlSort,
  };
};
