import { Dispatch, FC, RefObject, SetStateAction, useRef } from 'react';
import '../../../shared/assets/ui/styles/limits.scss';
import './popup-nav.scss';
import { UiButtonArrow } from '../../../shared/button-arrow';
import { Link } from 'react-router-dom';
import { useDisableScroll } from '../lib/useDisableScroll';

import { useBrandList } from '../../../features/brands';
import { useCategories } from '../../../features/categories';
import { usePopupOutside } from '../../../shared/utils';
import { UiButtonGray } from '../../../shared/button-gray';
import { UiLoader } from '../../../shared/loader';

interface PopupNavProps {
  setIsPopupOpen: Dispatch<SetStateAction<boolean>>;
  isPopupOpen: boolean;
  btnRef: RefObject<HTMLButtonElement | null>;
}

export const PopupNav: FC<PopupNavProps> = ({ setIsPopupOpen, isPopupOpen, btnRef }) => {
  const navDefault: { name: string; path: string }[] = [
    { name: 'О нас', path: '' },
    { name: 'Доставка', path: 'delivery' },
    { name: 'Youtube', path: 'https://youtube.com' },
    { name: 'TikTok', path: 'https://tiktok.com' },
    { name: 'Telegram', path: 'https://web.telegram.org/' },
  ];
  const popupRef = useRef<HTMLElement>(null);

  const {
    data: categoryData,
    isLoading: isLoadingCategories,
    isError: isErrorCategories,
  } = useCategories('*');
  const { data, isLoading: isLoadingBrands, isError: isErrorBrands } = useBrandList();

  const isLoading: boolean = isLoadingCategories || isLoadingBrands;
  const isError: boolean = isErrorCategories || isErrorBrands;

  const brands = data?.slice(0, 4) || [];
  const navProducts = categoryData?.categories.slice(0, 4) || [];

  useDisableScroll(isPopupOpen);
  usePopupOutside(popupRef, btnRef, setIsPopupOpen);
  return (
    <nav className="nav-popup" ref={popupRef}>
      <div className="nav-popup__wrapper limits">
        {brands && navProducts && !isLoading && !isError ? (
          <>
            <div className="nav-popup__list">
              <UiButtonArrow onClick={() => setIsPopupOpen(false)}>
                <Link to="/man/products">Мужская одежда</Link>
              </UiButtonArrow>{' '}
              <ul className="nav-popup__products">
                {navProducts.map((item, index) => (
                  <li key={index} className="nav-popup__item">
                    <UiButtonGray onClick={() => setIsPopupOpen(false)}>
                      <Link to={`/man/products?category=${item}`}>{item}</Link>
                    </UiButtonGray>
                  </li>
                ))}
              </ul>
            </div>
            <div className="nav-popup__list">
              <UiButtonArrow onClick={() => setIsPopupOpen(false)}>
                <Link to="/woman/products">Женская одежда</Link>
              </UiButtonArrow>
              <ul className="nav-popup__products">
                {navProducts.map((item, index) => (
                  <li key={index} className="nav-popup__item">
                    <UiButtonGray onClick={() => setIsPopupOpen(false)}>
                      <Link to={`/woman/products?category=${item}`}>{item}</Link>
                    </UiButtonGray>
                  </li>
                ))}
              </ul>
            </div>

            <div className="nav-popup__list">
              <UiButtonArrow onClick={() => setIsPopupOpen(false)}>
                <Link to="/brands">Все бренды</Link>
              </UiButtonArrow>
              <ul className="nav-popup__products">
                {brands.map((item) => (
                  <li key={item.id} className="nav-popup__item">
                    <UiButtonGray onClick={() => setIsPopupOpen(false)}>
                      <Link to={`/brand/${item.id}`}>{item.name}</Link>
                    </UiButtonGray>
                  </li>
                ))}
              </ul>
            </div>
            <ul className="nav-popup__list-about">
              {navDefault.map((nav, index) => (
                <li key={index} className="nav-popup__item-about">
                  <UiButtonGray onClick={() => setIsPopupOpen(false)}>
                    <Link to={`/${nav.path}`}>{nav.name}</Link>{' '}
                  </UiButtonGray>
                </li>
              ))}
            </ul>
          </>
        ) : (
          <div className="nav-popup__loader">
            <UiLoader />
          </div>
        )}
      </div>
    </nav>
  );
};
