import { keepPreviousData, useQuery } from '@tanstack/react-query';
import ProductApi from '../productApi';

export const useProducts = (
  brandId?: string | null,
  categoryName?: string | null,
  colorName?: string | null,
  sortBy?: string | null,
  orderBy?: string | null,
  genderName?: string | null,
  pageValue?: number | null,
) => {
  return useQuery({
    queryKey: [
      'products',
      brandId,
      categoryName,
      colorName,
      sortBy,
      orderBy,
      genderName,
      pageValue,
    ],
    queryFn: () =>
     ProductApi.getProducts(brandId, categoryName, colorName, sortBy, orderBy, genderName, pageValue),
    refetchOnWindowFocus: false,
    placeholderData: keepPreviousData,
  });
};
