import { useQuery } from '@tanstack/react-query';
import BrandApi from '../brandApi';

export const usePopularBrands = () => {
  return useQuery({
    queryKey: ['popular-brands'],
    queryFn: BrandApi.getPopularBrands,
    refetchOnWindowFocus: false,
  });
};
