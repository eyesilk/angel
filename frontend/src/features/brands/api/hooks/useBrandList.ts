import { keepPreviousData, useQuery } from '@tanstack/react-query';
import BrandApi from '../brandApi';

export const useBrandList = (genderName?: string | null) => {
  return useQuery({
    queryKey: ['brand-list', genderName],
    queryFn: () => BrandApi.getBrandList(genderName),
    refetchOnWindowFocus: false,
    placeholderData: keepPreviousData,
  });
};
