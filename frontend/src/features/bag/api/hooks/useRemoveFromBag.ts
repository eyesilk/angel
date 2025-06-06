import { useMutation, useQueryClient } from '@tanstack/react-query';
import { BagApi } from '../bagApi';

export const useRemoveFromBag = () => {
  const queryClient = useQueryClient();

  return useMutation<void, Error, { productId: string; size: string }>({
    mutationFn: BagApi.removeFromBag,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['bag-products'] });
    },
  });
};
