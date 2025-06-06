import { FC } from 'react';
import { Outlet } from 'react-router-dom';
import './layout.scss';
import { WidgetHeader } from '../../widgets/header';
import { WidgetFooter } from '../../widgets/footer';

export const AppLayout: FC = () => {
  return (
    <div className="wrapper">
      <WidgetHeader />
      <Outlet />
      <WidgetFooter />
    </div>
  );
};
