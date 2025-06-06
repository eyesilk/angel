import { FC, ReactNode } from 'react';
import { arrowIco } from '../../assets';
import './button-arrow.scss';

interface ButtonArrowProps {
  children: ReactNode;
  onClick?: (...args: any[]) => any;
}

export const ButtonArrow: FC<ButtonArrowProps> = ({ children, onClick }) => {
  return (
    <button onClick={onClick} className="button-arrow">
      <span className="button-arrow__text">{children}</span>
      <img src={arrowIco} alt="arrow" className="button-arrow__arrow" />
    </button>
  );
};
