import { Dispatch, forwardRef, SetStateAction, useEffect } from 'react';
import { useCategories } from '../../../features/categories';
import { useNavigate, useParams } from 'react-router-dom';
import './filters-aside.scss';
import { ButtonGray } from '../../../shared/button-gray/ui/ButtonGray';
import { useUrlFilter } from '../lib/useUrlFilter';
import { UiButtonCross } from '../../../shared/button-cross';

interface FilterAsideProps {
  setToggle: Dispatch<SetStateAction<boolean>>;
}
export const FiltersAside = forwardRef<HTMLDivElement, FilterAsideProps>(({ setToggle }, ref) => {
  const navigate = useNavigate();
  const { searchParams, handleUrlFilter } = useUrlFilter();
  const params = useParams<{ id: string; gender: string }>();
  const id: string = searchParams.get('brandId') || params.id || params.gender!;

  const { data: filters, isError } = useCategories(id);

  const handleFilter = (key: string, value: string): void => {
    handleUrlFilter(key, value);
  };

  useEffect(() => {
    if (isError) {
      navigate('/not-found');
    }
  }, [isError]);

  return (
    <div className="filters-aside" ref={ref}>
      <div className="filters-aside__cross">
        <UiButtonCross onClick={() => setToggle(false)} />
      </div>
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
    </div>
  );
});
