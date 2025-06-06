import { FC } from 'react';
import './landing-brand.scss';
import styles from './skeleton.module.scss'

export const Skeleton: FC = () => {
  return (
    <div className={styles.skeleton}>
      <div className={styles.skeleton__image}></div>
      <div className={styles.skeleton__name}></div>
    </div>
  );
};
