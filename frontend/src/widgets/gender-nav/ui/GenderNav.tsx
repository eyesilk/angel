import { FC } from 'react';
import '../../../shared/assets/ui/styles/limits.scss';
import './gender-nav.scss';
import landingWoman from '/assets/img/land-wmn.png';
import landingMan from '/assets/img/land-man.png';
import { Link } from 'react-router-dom';

const genders: { gender: 'Мужчинам' | 'Женщинам'; imageUrl: string; pos: 'right' | 'left' }[] = [
  { gender: 'Женщинам', imageUrl: landingWoman, pos: 'right' },
  { gender: 'Мужчинам', imageUrl: landingMan, pos: 'left' },
];

export const GenderNav: FC = () => {
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
