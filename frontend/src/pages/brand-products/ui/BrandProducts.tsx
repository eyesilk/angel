import { FC } from 'react';
import { WidgetBrandHeader } from '../../../widgets/brand-header';
import { WidgetProductList } from '../../../widgets/product-list';
import { useParams, useSearchParams } from 'react-router-dom';
import './brand-products.scss';

export const BrandProducts: FC = () => {
  const params = useParams<{ id: string }>();
  const [searchParams] = useSearchParams();

  return (
    <div className="brand-products">
      <WidgetBrandHeader />
      <WidgetProductList
        brandId={params.id}
        categoryName={searchParams.get('category')}
        colorName={searchParams.get('color')}
        sortBy={searchParams.get('sortBy')}
        orderBy={searchParams.get('order')}
      />
    </div>
  );
};
