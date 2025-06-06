import { useMutation, useQueryClient } from '@tanstack/react-query';
import { FavApi } from '../favApi';

export const useClearFav = () => {
  const queryClient = useQueryClient();

  const {
    mutateAsync: clearFav,
    isPending,
    isError,
  } = useMutation<{ message: string }, Error, string>({
    mutationFn: FavApi.clearFav,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['fav-products'] });
    },
  });

  return { clearFav, isPending, isError };
};
