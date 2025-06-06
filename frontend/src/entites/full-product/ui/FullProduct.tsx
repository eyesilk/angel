import { FC, useState } from 'react';
import { formatPrice } from '../../../shared/utils';
import './full-product.scss';
import { UiButtonGray } from '../../../shared/button-gray';
import { arrowIco, emptyHeart, heartSolid } from '../../../shared/assets';
import { UiButtonWrapper } from '../../../shared/button-wrapper';
import { UiButtonDefault } from '../../../shared/button-default';

interface FullProductProps {
  id: string;
  brandName: string;
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
  brandName,
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
        <div>
          <h1>{brandName}</h1>
          <UiButtonWrapper onClick={ isAuthed ? () => onFav() : () => setIsAuthOpen()}>
            {!isFav ? (
              <img src={emptyHeart} alt="empty heart" />
            ) : (
              <img src={heartSolid} alt="solid heart" />
            )}
          </UiButtonWrapper>
        </div>

        <h2>{name}</h2>
        <h3>{formatPrice(price)}</h3>
        <h4>Размеры</h4>

        <ul>
          {sizes.map((size, index) => (
            <li key={index}>
              <UiButtonGray active={size === selectedSize} onClick={() => setSelectedSize(size)}>
                {size}
              </UiButtonGray>
            </li>
          ))}
        </ul>
        {!isAdded(selectedSize) ? (
          <UiButtonDefault
            onCLick={
              isAuthed
                ? () => onAdd(id, selectedSize, imageUrl, name, price)
                : () => setIsAuthOpen()
            }
          >
            Добавить в корзину
          </UiButtonDefault>
        ) : (
          <UiButtonDefault
            onCLick={() => onIncr(id, selectedSize, imageUrl, name, price)}
            color="black"
          >
            Добавлено в корзину: {quantity(selectedSize)}
          </UiButtonDefault>
        )}

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
