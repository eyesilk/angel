import { FC, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { manProducts, womanProducts } from '../../../shared/assets';
import './gender-header.scss';

export const GenderHeader: FC = () => {
  const navigate = useNavigate()
  const params = useParams();
  const gender = params.gender;

  useEffect(() => {
    if (gender && gender !== 'man' && gender !== 'woman') {
      navigate('/not-found')
    }
  }, []);
  return (
    <header className="gender-header">
      <img src={gender === 'man' ? manProducts : womanProducts} alt={`${gender} products`} />
      <h1>{gender === 'woman' ? 'Женская' : 'Мужская'} одежда</h1>
    </header>
  );
};
