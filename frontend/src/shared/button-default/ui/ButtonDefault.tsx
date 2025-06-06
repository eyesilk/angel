import { FC, ReactNode } from 'react';
import './button-default.scss';

interface ButtonDefaultProps {
  children: ReactNode;
  onCLick?: (...args: any[]) => any;
  type?: 'submit' | 'reset' | 'button' | undefined;
  disabled?: boolean;
  color?: 'white' | 'black' | 'grey';
}

export const ButtonDefault: FC<ButtonDefaultProps> = ({ children, onCLick, type, disabled, color = 'white' }) => {
  return (
    <button className={`button-default button-default--${color}`} onClick={onCLick} type={type} disabled={disabled}>
      {children}
    </button>
  );
};
