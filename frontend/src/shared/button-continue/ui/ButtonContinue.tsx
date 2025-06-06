import { FC, ReactNode } from 'react';
import './button-continue.scss';
import { arrowIco } from '../../assets';

interface ButtonContinueProps {
  children: ReactNode;
  onClick?: (...args: any[]) => any;
}

export const ButtonContinue: FC<ButtonContinueProps> = ({ children, onClick }) => {
  return (
    <button className="continue-btn" onClick={onClick}>
      {children}
      <img src={arrowIco} alt="arrow" />
    </button>
  );
};
