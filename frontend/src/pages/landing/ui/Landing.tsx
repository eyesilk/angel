import { FC } from 'react';
import './landing.scss';
import '../../../shared/assets/ui/styles/visually-hidden.scss';
import { WidgetGenderNav } from '../../../widgets/gender-nav';
import { WidgetDescription } from '../../../widgets/description';

export const Landing: FC = () => {
  return (
    <div className="landing">
      <h1 className="visually-hidden">Angel - пространство авангардной моды.</h1>
      <WidgetGenderNav />
      <WidgetDescription />
    </div>
  );
};
