import { FC, useEffect } from 'react';
import { useCategories } from '../../../features/categories';
import { useNavigate, useParams } from 'react-router-dom';
import './filters-aside.scss';
import { ButtonGray } from '../../../shared/button-gray/ui/ButtonGray';
import { useUrlFilter } from '../lib/useUrlFilter';
import { useBrandList } from '../../../features/brands';

export const FiltersAside: FC = () => {
  const navigate = useNavigate()
  const { searchParams, handleUrlFilter } = useUrlFilter();
  const params = useParams<{ id: string; gender: string }>();
  const id: string = searchParams.get('brandId') || params.id || params.gender!;

  const { data: filters, isError } = useCategories(id);

  const { data: brands } = useBrandList(params.gender && params.gender === 'man' ? 'Муж' : 'Жен');

  const handleFilter = (key: string, value: string): void => {
    handleUrlFilter(key, value);
  };

  useEffect(() => {
    if (isError) {
      navigate('/not-found');
    }
  }, [isError]);

  return (
    <aside className="filters-aside">
      <div className="filters-aside__filter">
        <span>Категория</span>
        <ul className="filters-aside__list">
          {filters &&
            filters.categories.map((category) => (
              <li key={category}>
                <ButtonGray
                  onClick={() => handleFilter('category', category as string)}
                  active={searchParams.get('category') === category}
                >
                  {category}
                </ButtonGray>
              </li>
            ))}
        </ul>
      </div>
      <div className="filters-aside__filter">
        <span>Цвет</span>
        <ul className="filters-aside__list">
          {filters &&
            filters.colors.map((color) => (
              <li key={color}>
                <ButtonGray
                  onClick={() => handleFilter('color', color as string)}
                  active={searchParams.get('color') === color}
                >
                  {color}
                </ButtonGray>
              </li>
            ))}
        </ul>
      </div>
      {!params.id && (
        <div className="filters-aside__filter">
          <span>Бренд</span>
          <ul className="filters-aside__list">
            {brands &&
              brands.map((brand) => (
                <li key={brand.id}>
                  <ButtonGray
                    onClick={() => handleFilter('brandId', brand.id as string)}
                    active={searchParams.get('brandId') === brand.id}
                  >
                    {brand.name}
                  </ButtonGray>
                </li>
              ))}
          </ul>
        </div>
      )}
    </aside>
  );
};
