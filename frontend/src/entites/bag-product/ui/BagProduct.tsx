import { FC } from 'react';
import './bag-product.scss';
import { formatPrice } from '../../../shared/utils';
import { minus, plus } from '../../../shared/assets';
import { UiButtonWrapper } from '../../../shared/button-wrapper';
import { UiButtonCross } from '../../../shared/button-cross';

interface BagProductProps {
  id: string;
  imageUrl: string;
  name: string;
  price: number;
  size: string;
  count: number;
  onIncr: (...args: any[]) => any;
  onDecr: (...args: any[]) => any;
  onRemove: (...args: any[]) => any;
}

export const BagProduct: FC<BagProductProps> = ({
  id,
  imageUrl,
  name,
  price,
  size,
  count,
  onDecr,
  onIncr,
  onRemove,
}) => {
  const formatLink = (link: string): string => {
    return link.replace('/upload', '/upload/h_450,f_auto');
  };

  return (
    <div className="bag-product">
      <img src={formatLink(imageUrl)} alt={name} />
      <div className="bag-product__info">
        <div className="bag-product__descr">
          <div className="bag-product__title">
            <span className="bag-product__name">{name}</span>
            <div className="bag-product__cross">
              <UiButtonCross onClick={() => onRemove(id, size)} />
            </div>
          </div>

          <span>{formatPrice(price)}</span>
          <span className="bag-product__size">{size}</span>
        </div>

        <span className="bag-product__button">
          <UiButtonWrapper onClick={() => onDecr(id, size, count)}>
            <img src={minus} alt="remove one" />
          </UiButtonWrapper>
          <span>{count}</span>
          <UiButtonWrapper onClick={() => onIncr(id, size, imageUrl, name, price)}>
            <img src={plus} alt="add one" />
          </UiButtonWrapper>
        </span>
      </div>
    </div>
  );
};
