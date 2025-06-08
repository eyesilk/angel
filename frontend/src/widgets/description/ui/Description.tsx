import { FC } from 'react';
import '../../../shared/assets/ui/styles/limits.scss';
import './description.scss';

export const Description: FC = () => {
  return (
    <section className="description limits">
      <h3 className="description__title">Контакты</h3>
      <ul className="description__list">
        <li className="description__item">Youtube</li>
        <li className="description__item">Telegram</li>
        <li className="description__item">TikTok</li>
  </ul>
    </section>
  );
};
