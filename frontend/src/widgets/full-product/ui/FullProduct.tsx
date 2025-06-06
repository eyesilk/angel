import { FC } from 'react';
import { EntFullProduct } from '../../../entites/full-product';
import { useSingleProduct } from '../../../features/products/api/hooks/useSingleProduct';
import { useParams } from 'react-router-dom';
import { UiLoader } from '../../../shared/loader';
import { useBagFuncs, useBagStore, useRefetchBag } from '../../../features/bag';
import { useScrollTo } from '../lib/useScrollTo';
import { useRefirectIfError } from '../lib/useRedirectIfError';
import { useAuthStore } from '../../../features/auth';
import { useFavFuncs } from '../../../features/favorites';

export const FullProduct: FC = () => {
  const params = useParams<{ id: string }>();

  const { isFavorite, onClickFav } = useFavFuncs(params.id!);

  const isSizeAdded = (size: string) =>
    !!bagProducts.find((item) => item.productId === params.id && item.size === size);
  const { isSuccess, onAdd, onIncr } = useBagFuncs();
  const bagProducts = useBagStore((state) => state.bagProducts);
  const isAuthed = useAuthStore((state) => state.isAuthed);
  const setIsAuthOpen = useAuthStore((state) => state.setIsAuthOpen);
  const totalQuantity = (size: string) => bagProducts
    .filter((item) => item.productId === params.id && item.size === size)
    .reduce((sum, item) => sum + item.quantity, 0);

  const { data: product, isError, isLoading } = useSingleProduct(params.id!);

  useScrollTo();
  useRefirectIfError(isError);
  useRefetchBag(isSuccess);

  return (
    <>
      {product && !isError && !isLoading ? (
        <EntFullProduct
          id={product.id}
          brandName={product.brand!.name}
          name={product.name!}
          imageUrl={product.imageUrl!}
          price={product.price}
          sizes={product.sizes!}
          description={product.description!}
          composition={product.composition!}
          instructions={product.instructions!}
          country={product.country!}
          onAdd={onAdd}
          onIncr={onIncr}
          isAdded={isSizeAdded}
          quantity={totalQuantity}
          isAuthed={isAuthed}
          setIsAuthOpen={setIsAuthOpen}
          isFav={isFavorite}
          onFav={() => onClickFav(params.id!)}
        />
      ) : (
        <div
          style={{
            width: '100%',
            height: '100vh',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <UiLoader />
        </div>
      )}
    </>
  );
};
