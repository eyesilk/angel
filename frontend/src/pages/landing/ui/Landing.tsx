import { FC } from 'react';
import './landing.scss';
import '../../../shared/assets/ui/styles/visually-hidden.scss';
import { WidgetGenderNav } from '../../../widgets/gender-nav';

export const Landing: FC = () => {
  return (
    <div className="landing">
      <div className="landing__wrapper">
        <h1 className="visually-hidden">Noir - пространство авангардной моды.</h1>
        <WidgetGenderNav />
      </div>
    </div>
  );
};
