import { FC } from 'react';
import { WidgetProductList } from '../../../widgets/product-list';
import { WidgetGenderHeader } from '../../../widgets/gender-header';
import './products.scss';
import { useParams, useSearchParams } from 'react-router-dom';

export const Products: FC = () => {
  const [searchParams] = useSearchParams();
  const params = useParams<{ gender: string }>();

  return (
    <div className="gender-products">
      <WidgetGenderHeader />
      <WidgetProductList
        categoryName={searchParams.get('category')}
        colorName={searchParams.get('color')}
        sortBy={searchParams.get('sortBy')}
        orderBy={searchParams.get('order')}
        brandId={searchParams.get('brandId')}
        genderName={params.gender === 'man' ? 'Муж' : 'Жен'}
        pageValue={Number(searchParams.get('page'))}
      />
    </div>
  );
};
