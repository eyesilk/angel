import { FC } from 'react';
import './loader.scss';

export const Loader: FC = () => {
  return (
    <div className="loader">
      <div className="loader__spinner"></div>
    </div>
  );
};
