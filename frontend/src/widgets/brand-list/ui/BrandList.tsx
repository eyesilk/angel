import { FC } from 'react';
import '../../../shared/assets/ui/styles/limits.scss';
import './brand-list.scss';
import { UiButtonWrapper } from '../../../shared/button-wrapper';
import { useNavigate } from 'react-router-dom';
import { useBrandList } from '../../../features/brands';
import { UiLoader } from '../../../shared/loader';

export const BrandList: FC = () => {
  const navigate = useNavigate();
  const { data, isLoading, isError } = useBrandList();

  return (
    <section className="brand-list">
      <div className="brand-list__wrapper">
        {data && !isLoading && !isError ? (
          <ul className="brand-list__list">
            {data.map((brand) => (
              <li key={brand.id}>
                <UiButtonWrapper onClick={() => navigate(`/brand/${brand.id}`)}>
                  <span className="brand-list__btn">{brand.name}</span>
                </UiButtonWrapper>
              </li>
            ))}
          </ul>
        ) : (
          <div className="brand-list__loading">
            <UiLoader />
          </div>
        )}
      </div>
    </section>
  );
};
