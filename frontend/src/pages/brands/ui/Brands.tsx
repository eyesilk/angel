import { FC } from 'react';
import { WidgetBrandList } from '../../../widgets/brand-list';
import './brands.scss'

export const Brands: FC = () => {
  return (
    <div className='brands-page'>
      <WidgetBrandList />
    </div>
  );
};
