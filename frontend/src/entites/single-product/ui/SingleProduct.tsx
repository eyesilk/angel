import { FC, useState } from 'react';
import './single-product.scss';
import { formatPrice } from '../../../shared/utils';
import { productPlaceholder } from '../../../shared/assets';

interface SingleProductProps {
  imageUrl: string;
  name: string;
  price: number;
  onClick?: (...args: any[]) => any;
}

export const SingleProduct: FC<SingleProductProps> = ({ imageUrl, name, price, onClick }) => {
  const [isImageLoad, setIsImageLoad] = useState<boolean>(true);

  const formatLink = (link: string): string => {
    return link.replace('/upload', '/upload/h_450,f_auto');
  };

  return (
    <div className="single-product" style={{ opacity: isImageLoad ? 0 : 1 }} onClick={onClick}>
      <div className="single-product__image">
        {isImageLoad && <img src={productPlaceholder} alt="placeholder" />}
        <img
          src={formatLink(imageUrl)}
          alt="product image"
          loading="lazy"
          onLoad={() => setIsImageLoad(false)}
        />
      </div>

      <span className="single-product__name">{name}</span>
      <span className="single-product__price">{formatPrice(price)}</span>
    </div>
  );
};
