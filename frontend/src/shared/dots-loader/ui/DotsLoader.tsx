import { FC } from 'react';
import './dots-loader.scss';

interface DotsLoaderProps {
  color: 'white' | 'black';
}

export const DotsLoader: FC<DotsLoaderProps> = ({ color }) => {
  return <span className={`dots-loader dots-loader--${color}`}></span>;
};