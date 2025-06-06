import { useQuery } from '@tanstack/react-query';
import ProductApi from '../productApi';

export const useSingleProduct = (productId: string) => {
  return useQuery({
    queryKey: ['single-product', productId],
    queryFn: () => ProductApi.getSingleProduct(productId),
  });
};
