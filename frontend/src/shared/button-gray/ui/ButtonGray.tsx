import { FC, ReactNode } from 'react';
import './button-gray.scss';

interface ButtonGrayProps {
  children: ReactNode;
  onClick?: (...args: any[]) => any;
  active?: boolean;
}

export const ButtonGray: FC<ButtonGrayProps> = ({ children, onClick, active }) => {
  return (
    <button className={`button-gray ${active ? 'button-gray_active' : ''}`} onClick={onClick}>
      <span>{children}</span>
    </button>
  );
};
