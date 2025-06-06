import { useMutation, useQueryClient } from '@tanstack/react-query';
import { BagApi } from '../bagApi';

export const useDecrFromBag = () => {
  const queryClient = useQueryClient();

  return useMutation<void, Error, { productId: string; size: string }>({
    mutationFn: BagApi.decrFromBag,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['bag-products'] });
    },
  });
};
