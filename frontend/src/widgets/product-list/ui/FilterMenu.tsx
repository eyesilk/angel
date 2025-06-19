import { FC, useRef, useState } from 'react';
import { UiButtonWrapper } from '../../../shared/button-wrapper';
import './filter-menu.scss';
import { SortPopup } from './SortPopup';
import { usePopupOutside } from '../../../shared/utils';
import { FiltersAside } from './FiltersAside';

export const FilterMenu: FC = () => {
  const sortRef = useRef<HTMLDivElement>(null);
  const sortBtnRef = useRef<HTMLButtonElement>(null);

  const filterRef = useRef<HTMLDivElement>(null);
  const filterBtnRef = useRef<HTMLButtonElement>(null);

  const [isSortOpen, setIsSortOpen] = useState<boolean>(false);
  const [isFilterOpen, setIsFilterOpen] = useState<boolean>(false);

  usePopupOutside(sortRef, sortBtnRef, setIsSortOpen);
  usePopupOutside(filterRef, filterBtnRef, setIsFilterOpen);

  return (
    <div className="filter-menu">
      <ul className="filter-menu__list">
        <li>
          <UiButtonWrapper onClick={() => setIsFilterOpen((prev) => !prev)} ref={filterBtnRef}>
            <span>Фильтры</span>
          </UiButtonWrapper>
        </li>
        <li>
          <UiButtonWrapper onClick={() => setIsSortOpen((prev) => !prev)} ref={sortBtnRef}>
            <span>Сортировать</span>
          </UiButtonWrapper>
        </li>
      </ul>
      {isFilterOpen && <FiltersAside ref={filterRef} setToggle={setIsFilterOpen} />}
      {isSortOpen && <SortPopup ref={sortRef} setToggle={setIsSortOpen} />}
    </div>
  );
};
