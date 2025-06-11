import { FC, useState } from 'react';
import { formatPrice } from '../../../shared/utils';
import './full-product.scss';
import { arrowIco, heartSolid } from '../../../shared/assets';
import emptyHeart from '/assets/icons/favorite.svg';
import { UiButtonWrapper } from '../../../shared/button-wrapper';

interface FullProductProps {
  id: string;
  name: string;
  imageUrl: string;
  price: number;
  sizes: string[];
  description: string;
  composition: string;
  instructions: string;
  country: string;
  onAdd: (...args: any[]) => any;
  onIncr: (...args: any[]) => any;
  isAdded: (size: string) => boolean;
  quantity: (size: string) => number;
  isAuthed: boolean;
  setIsAuthOpen: (...args: any[]) => any;
  onFav: (...args: any[]) => any;
  isFav: boolean;
}

export const FullProduct: FC<FullProductProps> = ({
  id,
  name,
  imageUrl,
  price,
  sizes,
  description,
  composition,
  instructions,
  country,
  onAdd,
  onIncr,
  isAdded,
  quantity,
  isAuthed,
  setIsAuthOpen,
  isFav,
  onFav,
}) => {
  const [isImageLoad, setIsImageLoad] = useState<boolean>(true);
  const [selectedSize, setSelectedSize] = useState<string>(sizes[0]);

  return (
    <div className="ent-full-product limits" style={{ opacity: isImageLoad ? 0 : 1 }}>
      <div className="ent-full-product__descr">
        <h1>{name}</h1>
        <h3>{formatPrice(price)}</h3>

        <ul>
          {sizes.map((size, index) => (
            <li key={index}>
              <button
                className={`button-size ${size === selectedSize && 'button-size-active'}`}
                onClick={() => setSelectedSize(size)}
              >
                {size}
              </button>
            </li>
          ))}
        </ul>

        <details>
          <summary>
            Описание <img src={arrowIco} alt="arrow" />
          </summary>
          <p>{description}</p>
          <span>Страна производства: {country}</span>
        </details>
        <details>
          <summary>
            Состав <img src={arrowIco} alt="arrow" />
          </summary>
          <p>{composition}</p>
        </details>
        <details>
          <summary>
            Рекомендации по уходу <img src={arrowIco} alt="arrow" />
          </summary>
          <p>{instructions}</p>
        </details>
        <div className="ent-full-product__add-buttons">
          {!isAdded(selectedSize) ? (
            <button
              className="button-add"
              onClick={
                isAuthed
                  ? () => onAdd(id, selectedSize, imageUrl, name, price)
                  : () => setIsAuthOpen()
              }
            >
              Добавить в корзину
            </button>
          ) : (
            <button
              className="button-add"
              onClick={() => onIncr(id, selectedSize, imageUrl, name, price)}
            >
              Добавлено в корзину: {quantity(selectedSize)}
            </button>
          )}
          <UiButtonWrapper onClick={isAuthed ? () => onFav() : () => setIsAuthOpen()}>
            {!isFav ? (
              <img src={emptyHeart} alt="empty heart" />
            ) : (
              <img src={heartSolid} alt="solid heart" />
            )}
          </UiButtonWrapper>
        </div>
      </div>
      <img
        src={imageUrl}
        alt={name}
        className="ent-full-product__image"
        onLoad={() => setIsImageLoad(false)}
      />
    </div>
  );
};
