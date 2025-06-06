import { FC } from 'react';
import './landing.scss';
import '../../../shared/assets/ui/styles/visually-hidden.scss';
import { WidgetGenderNav } from '../../../widgets/gender-nav';

export const Landing: FC = () => {
  return (
    <>
      <h1 className="visually-hidden">Angel - пространство авангардной моды.</h1>
      <WidgetGenderNav />
    </>
  );
};
