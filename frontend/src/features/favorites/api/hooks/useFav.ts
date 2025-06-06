import { keepPreviousData, useQuery } from '@tanstack/react-query';
import { FavApi } from '../favApi';

export const useFav = () => {
  return useQuery({
    queryKey: ['fav-products'],
    queryFn: FavApi.getFav,
    refetchOnWindowFocus: false,
    placeholderData: keepPreviousData
  });
};
