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
    <div className="profile limits">
      <span className="profile__welcomes">Привет, {userData?.username}</span>
      <section className="profile__section">
        <ul className="profile__tabs">
          <li>
            <ButtonGray
              onClick={() => handleTabChange('favorites')}
              active={currentTab === 'favorites'}
            >
              Избранное
            </ButtonGray>
          </li>
          <li>
            <ButtonGray onClick={() => handleTabChange('safety')} active={currentTab === 'safety'}>
              Безопасность
            </ButtonGray>
          </li>
        </ul>
        {tabs[currentTab] || <Favorites />}
      </section>
    </div>
  );
};
