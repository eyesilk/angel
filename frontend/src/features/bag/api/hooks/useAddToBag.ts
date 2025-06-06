import { useMutation, useQueryClient } from '@tanstack/react-query';
import { BagApi } from '../bagApi';
import { useBagStore } from '../../model/useBagStore';

export const useAddToBag = () => {
  const queryClient = useQueryClient();
  const setIsBagOpen = useBagStore((state) => state.setIsBagOpen);

  return useMutation<void, Error, { productId: string; size: string }>({
    mutationFn: BagApi.addToBag,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['bag-products'] });
      setIsBagOpen();
    },
  });
};
