import { FC } from 'react';
import { logo } from '../../../shared/assets';
import './footer.scss';
import { UiButtonContinue } from '../../../shared/button-continue';
import '../../../shared/assets/ui/styles/limits.scss';
import { Link } from 'react-router-dom';

export const Footer: FC = () => {
  const relationShip: { name: string; link: string }[] = [
    { name: 'Связаться с нами', link: '/connect' },
    { name: 'Доставка', link: '/delivery' },
    { name: 'Возврат', link: '/return' },
    { name: 'Условия обслуживания', link: '/rules' },
  ];

  const links: { name: string; link: string }[] = [
    { name: 'О нас', link: '/' },
    { name: 'Telegram', link: 'https://web.telegram.org/' },
    { name: 'Youtube', link: 'https://youtube.com' },
    { name: 'Tiktok', link: 'https://tiktok.com' },
  ]; 

  return (
    <footer className="footer">
      <div className="footer__wrapper limits">
        <div className="footer__logo-wrapper">
          <div className="footer__logo">
            <img src={logo} alt="noir logo" />
          </div>
        </div>
        <div className="footer__information">
          <div className="footer__links">
            <div className="footer__list">
              <span>Поддержка клиентов</span>
              <ul>
                {relationShip.map((item) => (
                  <li key={item.link}>
                    <Link to={item.link}>{item.name}</Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="footer__list">
              <span>Ссылки</span>
              <ul>
                {links.map((item) => (
                  <li key={item.link}>
                    <Link to={item.link}>{item.name}</Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="footer__mail">
            <span>Подписаться на рассылку</span>
            <UiButtonContinue>
              <input type="text" placeholder="noir@gmail.com" className="footer__mail-input" />
            </UiButtonContinue>
          </div>
          <div className="footer__address">
            <span className='footer__address-string'>
              Москва, Россия <span>©</span> 2025, noir.
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};
