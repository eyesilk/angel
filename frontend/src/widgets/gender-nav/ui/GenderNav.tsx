import { FC } from 'react';
import '../../../shared/assets/ui/styles/limits.scss';
import './gender-nav.scss';
import { landingMan, landingWoman } from '../../../shared/assets';
import { Link } from 'react-router-dom';

export const GenderNav: FC = () => {
  const genders: { gender: 'Мужчинам' | 'Женщинам'; imageUrl: string; pos: 'right' | 'left' }[] = [
    { gender: 'Мужчинам', imageUrl: landingMan, pos: 'right' },
    { gender: 'Женщинам', imageUrl: landingWoman, pos: 'left' },
  ];

  return (
    <nav className="gender-nav">
      <ul className="gender-nav__list">
        {genders.map((gender, index) => (
          <li key={index} className="gender-nav__item">
            <Link to={`/${gender.gender === 'Мужчинам' ? 'man' : 'woman'}/products`}>
              <img src={gender.imageUrl} alt={`${gender.gender}`} />
              <span className={`gender-nav__item-title ${gender.pos}`}>{gender.gender}</span>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};
