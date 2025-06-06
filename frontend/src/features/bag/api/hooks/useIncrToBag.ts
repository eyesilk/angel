import { useMutation, useQueryClient } from '@tanstack/react-query';
import { BagApi } from '../bagApi';

export const useIncrToBag = () => {
  const queryClient = useQueryClient();
 
  return useMutation<void, Error, { productId: string; size: string }>({
    mutationFn: BagApi.incrToBag,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['bag-products'] });
    },
  });
};
