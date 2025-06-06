import { FC } from 'react';
import './not-found.scss';
import { logo } from '../../../shared/assets';
import { UiButtonDefault } from '../../../shared/button-default';
import { Link } from 'react-router-dom';

export const NotFound: FC = () => {
  return (
    <div className="not-found-page">
      <div>
        <img src={logo} alt="noir logo" />
        <h1>Страница не найдена.</h1>
        <p>Возможно, ссылка устарела, или на сайте возникли временные неполадки.</p>
        <Link to="/">
          <UiButtonDefault>Вернуться на главную страницу</UiButtonDefault>
        </Link>
      </div>
    </div>
  );
};
