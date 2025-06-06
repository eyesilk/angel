import { FC } from 'react';
import { WidgetProfileSettings } from '../../../widgets/profile-settings';
import './page-profile.scss'

export const Profile: FC = () => {
  return (
    <div className='page-profile'>
      <WidgetProfileSettings />
    </div>
  );
};
