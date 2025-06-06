import { Dispatch, forwardRef, SetStateAction } from 'react';
import './sort-popup.scss';
import { useUrlSort } from '../lib/useUrlSort';
import { UiButtonCross } from '../../../shared/button-cross';
import { UiButtonWrapper } from '../../../shared/button-wrapper';

interface SortPopupProps {
  setToggle: Dispatch<SetStateAction<boolean>>;
}

const sortList: { name: string; sortBy: string; order: string }[] = [
  { name: 'По популярности', sortBy: 'views', order: 'desc' },
  { name: 'От а до я', sortBy: 'name', order: 'asc' },
  { name: 'От я до а', sortBy: 'name', order: 'desc' },
  { name: 'Цена по возрастанию', sortBy: 'price', order: 'asc' },
  { name: 'Цена по убыванию', sortBy: 'price', order: 'desc' },
];

export const SortPopup = forwardRef<HTMLDivElement, SortPopupProps>(({ setToggle }, ref) => {
  const { searchParams, handleUrlSort } = useUrlSort();

  const handleSort = (sortValue: string, orderValue: string): void => {
    handleUrlSort(sortValue, orderValue);
    setToggle(false);
  };

  return (
    <div className="sort-popup" ref={ref}>
      <div className="sort-popup__cross">
        <UiButtonCross onClick={() => setToggle(false)} />
      </div>

      <ul className="sort-popup__list">
        {sortList.map((sort) => (
          <li>
            <UiButtonWrapper onClick={() => handleSort(sort.sortBy, sort.order)} key={sort.name}>
              <span
                className={`sort-popup__button ${searchParams.get('order') === sort.order && searchParams.get('sortBy') === sort.sortBy && 'sort-popup__button-active'}`}
              >
                {sort.name}
              </span>
            </UiButtonWrapper>
          </li>
        ))}
      </ul>
    </div>
  );
});
