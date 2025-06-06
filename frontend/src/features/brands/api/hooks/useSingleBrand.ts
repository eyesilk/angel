import { useQuery } from '@tanstack/react-query';
import BrandApi from '../brandApi';

export const useSingleBrand = (id: string) => {
  return useQuery({
    queryKey: ['single-brand', id],
    queryFn: () => BrandApi.getSingleBrand(id),
    refetchOnWindowFocus: false,
  });
};
