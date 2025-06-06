import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { FavApi } from '../favApi';
import { useEffect, useState } from 'react';

export const useFavFuncs = (productId: string) => {
  const queryClient = useQueryClient();

  const { data: isFav, isSuccess: checkFavSuccess } = useQuery({
    queryKey: ['fav-products-check', productId],
    queryFn: () => FavApi.checkFav(productId),
  });

  const { mutateAsync: addFav } = useMutation<{ message: string }, Error, string>({
    mutationFn: FavApi.addFav,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['fav-products'] });
      queryClient.invalidateQueries({ queryKey: ['fav-products-check', productId] });
    },
  });

  const { mutateAsync: removeFav } = useMutation<{ message: string }, Error, string>({
    mutationFn: FavApi.removeFav,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['fav-products'] });
      queryClient.invalidateQueries({ queryKey: ['fav-products-check', productId] });
    },
  });

  const onClickFav = async (productId: string): Promise<void> => {
    setIsFavorite((prev) => !prev);
    if (isFavorite) {
      await removeFav(productId);
    } else {
      await addFav(productId);
    }
  };

  const [isFavorite, setIsFavorite] = useState<boolean>(isFav || false);

  useEffect(() => {
    if (checkFavSuccess) {
      setIsFavorite(isFav);
    }
  }, [checkFavSuccess]);

  return { isFavorite, onClickFav };
};
