import { FC } from 'react';
import { WidgetFullProduct } from '../../../widgets/full-product';
import './product.scss'

export const Product: FC = () => {
  return (
    <div className='page-full-product'>
      <WidgetFullProduct />
    </div>
  );
};
