import { FC, ReactNode, useEffect } from 'react';
import { useAuthStore } from '../../../features/auth';
import './profile-settings.scss';
import { ButtonGray } from '../../../shared/button-gray/ui/ButtonGray';
import { Favorites } from './Favorites';
import { Safety } from './Safety';
import { useNavigate, useSearchParams } from 'react-router-dom';

export const ProfileSettings: FC = () => {
  const userData = useAuthStore((state) => state.userData);
  const navigate = useNavigate();
  const isAuthed = useAuthStore((state) => state.isAuthed);
  const [searchParams, setSearchParams] = useSearchParams();

  const tabs: Record<string, ReactNode> = {
    favorites: <Favorites />,
    safety: <Safety />,
  };

  useEffect(() => {
    if (!isAuthed) {
      navigate('/');
      location.reload();
    }
  }, [isAuthed]);

  useEffect(() => {
    if (!searchParams.get('tab')) {
      setSearchParams({ tab: 'favorites' }, { replace: true });
    }
  }, [searchParams, setSearchParams]);

  const currentTab = searchParams.get('tab') || 'favorites';

  const handleTabChange = (tab: string) => {
    setSearchParams({ tab }, { replace: true });
  };

  return (
    <div className="profile-settings limits">
      <span className="profile-settings__welcomes">Привет, {userData?.username}</span>
      <section className="profile-settings__section">
        <ul className="profile-settings__tabs">
          <li>
            <button
              className={`profile-settings__button ${currentTab === 'favorites' && 'profile-settings__button_active'}`}
              onClick={() => handleTabChange('favorites')}
            >
              Избранное
            </button>
          </li>
          <li>
            <button
              className={`profile-settings__button ${currentTab === 'safety' && 'profile-settings__button_active'}`}
              onClick={() => handleTabChange('safety')}
            >
              Безопасность
            </button>
          </li>
        </ul>
        {tabs[currentTab] || <Favorites />}
      </section>
    </div>
  );
};
