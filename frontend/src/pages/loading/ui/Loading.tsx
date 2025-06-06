import { FC } from 'react';
import { UiLoader } from '../../../shared/loader';

export const Loading: FC = () => {
  return (
    <div
      style={{
        width: '100%',
        height: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <UiLoader />
    </div>
  );
};
