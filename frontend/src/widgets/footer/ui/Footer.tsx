import { FC } from 'react';
import './footer.scss';
import '../../../shared/assets/ui/styles/limits.scss';
import { Link } from 'react-router-dom';

const relationShip: { name: string; link: string }[] = [
  { name: 'Оферта', link: '/connect' },
  { name: 'Политика', link: '/delivery' },
  { name: 'Конфиденциальности', link: '/conf' },
];

const links: { name: string; link: string }[] = [
  { name: 'Telegram', link: 'https://web.telegram.org/' },
  { name: 'Youtube', link: 'https://youtube.com' },
  { name: 'Tiktok', link: 'https://tiktok.com' },
];

export const Footer: FC = () => {
  return (
    <footer className="footer">
      <div className="footer__wrapper limits">
        <div className="footer__mail">
          <span>Подписаться на рассылку</span>
          <p>Подпишитесь на нашу рассылку, чтобы получать последние новости и обновления.</p>
          <div className="footer__input-wrapper">
            <input placeholder="EMAIL" />
            <button>Отправить</button>
          </div>
        </div>
        <div className="footer__thirdparty">
          <div className="footer__links">
            <ul>
              {links.map((item, index) => (
                <li key={index}>
                  <a href={item.link}>{item.name}</a>
                </li>
              ))}
            </ul>
            <ul>
              {relationShip.map((item, index) => (
                <li key={index}>
                  <Link to={item.link}>{item.name}</Link>
                </li>
              ))}
            </ul>
          </div>
          <span className="footer__address">Moscow, russia © 2025, angl</span>
        </div>
      </div>
    </footer>
  );
};
