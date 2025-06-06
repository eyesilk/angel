import { FC } from 'react';
import { Link } from 'react-router-dom';
import { EntSingleProduct, ESPSkeleton } from '../../../entites/single-product';
import { useClearFav, useFav } from '../../../features/favorites';
import './favoties.scss';
import { UiButtonWrapper } from '../../../shared/button-wrapper';

export const Favorites: FC = () => {
  const { data: favItems, isLoading, isError } = useFav();
  const { clearFav, isPending } = useClearFav();

  return (
    <div className="favorites">
      {favItems && favItems?.length > 0 && <UiButtonWrapper onClick={clearFav}>Отчистить корзину</UiButtonWrapper>}
      {isPending || isLoading || !favItems ? (
        <div className="favorites__grid">
          {[...new Array(10)].map((_, index) => (
            <ESPSkeleton key={index} />
          ))}
        </div>
      ) : favItems.length > 0 ? (
        <div className="favorites__grid">
          {favItems.map((favItem) => (
            <Link to={`/product/${favItem.product.id}`} key={favItem.id}>
              <EntSingleProduct
                imageUrl={favItem.product.imageUrl!}
                name={favItem.product.name}
                price={favItem.product.price}
              />
            </Link>
          ))}
        </div>
      ) : isError ? (
        <div className="favorites__not-found">
          <span>у вас пока нет избранных товаров</span>
        </div>
      ) : (
        <div className="favorites__not-found">
          <span>у вас пока нет избранных товаров</span>
        </div>
      )}
    </div>
  );
};
