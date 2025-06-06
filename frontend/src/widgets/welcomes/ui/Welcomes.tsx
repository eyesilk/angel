import { FC } from 'react';
import './welcomes.scss';
import { firstWoman, logo } from '../../../shared/assets';
import { Link } from 'react-router-dom';
import { UiButtonContinue } from '../../../shared/button-continue';
import '../../../shared/assets/ui/styles/limits.scss'

export const Welcomes: FC = () => {
  return (
    <div className="welcomes">
      <section className="welcomes__first-section">
        <div className="limits">
          <div className="welcomes__separator"></div>
          <p className="welcomes__first-descr">
            Мы собрали для вас авангардные бренды со всего мира — от культовых до молодых
            независимых дизайнеров, переосмысляющих силуэты, материалы и формы. Здесь классика
            встречается с деконструкцией, а эксперименты с текстурой и кроем становятся искусством
          </p>
        </div>

        <img src={firstWoman} alt="model" className="welcomes__first-model" />
      </section>
      <section className="welcomes__second-section limits">
        <div className="welcomes__logo">
          <img src={logo} alt="noir logo" />
        </div>
        <div className="welcomes__second-descr">
          <p>
            — это пространство авангардной моды, созданное для тех, кто ищет самовыражение через
            стиль. С момента запуска мы стремимся к тому, чтобы объединить в одном месте культовые
            бренды, независимых дизайнеров и редкие коллекции, формирующие новую эстетику в моде.
          </p>
          <p>
            Наша платформа была создана для тех, кто ценит нестандартный подход к стилю, ищет
            уникальные вещи и рассматривает одежду как способ самовыражения. Мы тщательно отбираем
            коллекции, предлагая эксклюзивные модели от Maison Margiela, Junya Watanabe, Ann
            Demeulemeester, Yohji Yamamoto и многих других дизайнеров, работающих на стыке моды и
            искусства.
          </p>
          <p>
            За эти годы мы выросли из небольшого онлайн-пространства в полноценную платформу, где
            можно найти не только одежду, обувь и аксессуары, но и архивные вещи, лимитированные
            дропы и капсульные коллекции. Мы постоянно развиваемся, открывая новые имена и следуя за
            главными экспериментальными тенденциями в моде.
          </p>
          <UiButtonContinue>
              <Link className='welcomes__catalog-btn' to='/man/products'>
                <span>Перейти в каталог</span>
              </Link>
          </UiButtonContinue>
        </div>
      </section>
    </div>
  );
};
