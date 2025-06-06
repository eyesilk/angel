import { FC, useRef, useState } from 'react';
import { UiButtonWrapper } from '../../../shared/button-wrapper';
import './filter-menu.scss';
import { Link, useLocation } from 'react-router-dom';
import { SortPopup } from './SortPopup';
import { usePopupOutside } from '../../../shared/utils';

export const FilterMenu: FC = () => {
  const sortRef = useRef<HTMLDivElement>(null);
  const sortBtnRef = useRef<HTMLButtonElement>(null);
  const [isSortOpen, setIsSortOpen] = useState<boolean>(false);
  const location = useLocation();

  usePopupOutside(sortRef, sortBtnRef, setIsSortOpen);

  return (
    <div className="filter-menu">
      <ul className="filter-menu__list">
        <li>
          <UiButtonWrapper>
            <Link to={`${location.pathname}?page=1`}>Сбросить</Link>
          </UiButtonWrapper>
        </li>
        <li>
          <UiButtonWrapper onClick={() => setIsSortOpen((prev) => !prev)} ref={sortBtnRef}>
            <span>Сортировать</span>
          </UiButtonWrapper>
        </li>
      </ul>
      {isSortOpen && <SortPopup ref={sortRef} setToggle={setIsSortOpen} />}
    </div>
  );
};
