import { keepPreviousData, useQuery } from '@tanstack/react-query';
import CategoriesApi from '../getCategories';

export const useCategories = (id: string) => {
  return useQuery({
    queryKey: ['categories-list', id],
    queryFn: () => CategoriesApi.getCategories(id),
    refetchOnWindowFocus: false,
    placeholderData: keepPreviousData,
  });
};
