import { Dispatch, FC, RefObject, SetStateAction, useRef } from 'react';
import '../../../shared/assets/ui/styles/limits.scss';
import './popup-nav.scss';
import { Link } from 'react-router-dom';
import { useDisableScroll } from '../lib/useDisableScroll';
import { useBrandList } from '../../../features/brands';
import { useCategories } from '../../../features/categories';
import { usePopupOutside } from '../../../shared/utils';
import { UiLoader } from '../../../shared/loader';

interface PopupNavProps {
  setIsPopupOpen: Dispatch<SetStateAction<boolean>>;
  isPopupOpen: boolean;
  btnRef: RefObject<HTMLButtonElement | null>;
}

const contacts: { name: string; path: string }[] = [
  { name: 'Youtube', path: 'https://youtube.com' },
  { name: 'TikTok', path: 'https://tiktok.com' },
  { name: 'Telegram', path: 'https://web.telegram.org/' },
];

export const PopupNav: FC<PopupNavProps> = ({ setIsPopupOpen, isPopupOpen, btnRef }) => {
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
  const navProducts = categoryData?.categories.slice(0, 2) || [];

  useDisableScroll(isPopupOpen);
  usePopupOutside(popupRef, btnRef, setIsPopupOpen);
  return (
    <nav className="nav-popup" ref={popupRef}>
      <div className="nav-popup__wrapper limits">
        {brands && navProducts && !isLoading && !isError ? (
          <>
            <div>
              <div className="nav-popup__list">
                <button className="nav-popup__button-title" onClick={() => setIsPopupOpen(false)}>
                  <Link to="/man/products">Мужчинам</Link>
                </button>{' '}
                <ul className="nav-popup__products">
                  {navProducts.map((item, index) => (
                    <li key={index} className="nav-popup__item">
                      <button
                        className="nav-popup__button-subtitle"
                        onClick={() => setIsPopupOpen(false)}
                      >
                        <Link to={`/man/products?category=${item}&page=1`}>{item}</Link>
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="nav-popup__list">
                <button className="nav-popup__button-title" onClick={() => setIsPopupOpen(false)}>
                  <Link to="/woman/products">Женщинам</Link>
                </button>
                <ul className="nav-popup__products">
                  {navProducts.map((item, index) => (
                    <li key={index} className="nav-popup__item">
                      <button
                        className="nav-popup__button-subtitle"
                        onClick={() => setIsPopupOpen(false)}
                      >
                        <Link to={`/woman/products?category=${item}&page=1`}>{item}</Link>
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="nav-popup__list">
                <span className="nav-popup__list-title">Контакты</span>
                <ul className="nav-popup__products">
                  {contacts.map((item, index) => (
                    <li key={index} className="nav-popup__item">
                      <button
                        className="nav-popup__button-subtitle"
                        onClick={() => setIsPopupOpen(false)}
                      >
                        <a href={item.path} target="_blank">
                          {item.name}
                        </a>
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <span className="nav-popup__title">Меню</span>
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
