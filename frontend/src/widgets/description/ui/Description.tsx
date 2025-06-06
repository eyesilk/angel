import { FC } from 'react';
import '../../../shared/assets/ui/styles/limits.scss';
import './description.scss';
import { firstShopImg, secondShopImg } from '../../../shared/assets';

export const Description: FC = () => {
  return (
    <section className="description limits">
      <p className="description__text">
        В 2022 году мы сделали важный шаг в развитии — открыли первый магазин в Москве. Это стало
        естественным продолжением нашего онлайн-пространства. С момента открытия оно стало не просто
        магазином, а местом для общения, обмена идеями и вдохновения.
      </p>
      <div className="description__img-block">
        <img src={firstShopImg} alt="Магазин изнутри" className='description__img-first'/>
        <div className="description__second-img-part">
          <img src={secondShopImg} alt="Магазин изнутри" className='description__img-second' />
          <span>
            Г. Москва, Тверская улица, 18к1
            <br /> м. Пушкинская, М. Тверская 
          </span>
        </div>
      </div>
    </section>
  );
};
