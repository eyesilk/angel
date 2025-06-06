import { forwardRef, ReactNode } from 'react';
import './button-wrapper.scss';

interface ButtonWrapperProps {
  children: ReactNode;
  onClick?: (...args: any[]) => any;
}

export const ButtonWrapper = forwardRef<HTMLButtonElement, ButtonWrapperProps>(
  ({ children, onClick }, ref) => {
    return (
      <button className="button" onClick={onClick} ref={ref}>
        {children}
      </button>
    );
  }
);

