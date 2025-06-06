import { FC } from 'react';
import '../../../shared/assets/ui/styles/limits.scss';
import './brands-nav.scss';
import { ELBSkeleton, EntLandingBrand } from '../../../entites/landing-brand';
import { Link } from 'react-router-dom';
import { usePopularBrands } from '../../../features/brands';

export const BrandsNav: FC = () => {
  const { data: brands, isError, isLoading } = usePopularBrands();

  return (
    <section className="brands limits">
      <h2>Популярные бренды</h2>
      <nav>
        <ul>
          {!brands || isError || isLoading
            ? [...new Array(4)].map((_, index) => <ELBSkeleton key={index} />)
            : brands.map((brand) => (
                <li key={brand.id}>
                  <Link to={`/brand/${brand.id}`}>
                    <EntLandingBrand image={brand.landingImageUrl!} name={brand.name} />
                  </Link>
                </li>
              ))}
        </ul>
      </nav>
    </section>
  );
};
