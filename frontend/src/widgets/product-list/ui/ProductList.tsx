import { FC, useEffect } from 'react';
import { useProducts } from '../../../features/products/api/hooks/useProducts';
import { EntSingleProduct, ESPSkeleton } from '../../../entites/single-product';
import './product-list.scss';
import { FilterMenu } from './FilterMenu';
import { FiltersAside } from './FiltersAside';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { Pagination } from './Pagination';
import { useUrlPaginate } from '../lib/useUrlPaginate';

interface ProductListProps {
  brandId?: string | null;
  categoryName?: string | null;
  colorName?: string | null;
  sortBy?: string | null;
  orderBy?: string | null;
  genderName?: string | null;
  pageValue?: number | null;
}

export const ProductList: FC<ProductListProps> = ({
  brandId,
  categoryName,
  colorName,
  sortBy,
  orderBy,
  genderName,
  pageValue,
}) => {
  const { handleUrlPaginate } = useUrlPaginate();
  const params = useParams<{ gender: string }>();
  const navigate = useNavigate();
  const { data, isError, isLoading } = useProducts(
    brandId,
    categoryName,
    colorName,
    sortBy,
    orderBy,
    genderName,
    pageValue,
  );

  const products = data?.products;

  useEffect(() => {
    if (isError) {
      navigate('/not-found');
    }
  }, [isError]);

  useEffect(() => {
    handleUrlPaginate('page', '1');
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }, [params.gender]);

  return (
    <section className="product-list">
      <div className="product-list__wrapper limits">
        <FiltersAside />
        <div className="product-list__products">
          <FilterMenu />
          {isLoading || !products ? (
            <div className="product-list__grid">
              {[...new Array(10)].map((_, index) => (
                <ESPSkeleton key={index} />
              ))}
            </div>
          ) : products.length > 0 ? (
            <div className="product-list__grid">
              {products.map((product) => (
                <Link to={`/product/${product.id}`} key={product.id}>
                  <EntSingleProduct
                    imageUrl={product.imageUrl!}
                    name={product.name}
                    price={product.price}
                  />
                </Link>
              ))}
            </div>
          ) : (
            <div className="product-list__not-found">
              <span>Товары не найдены.</span>
            </div>
          )}
          {data && data.totalCount / 10 > 1 && <Pagination totalPages={data.totalCount} />}
        </div>
      </div>
    </section>
  );
};
