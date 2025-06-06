import { FC, useState } from 'react';
import './brand-header.scss';
import { brandPlaceholder } from '../../../shared/assets';

interface BrandHeaderProps {
  imageUrl: string;
  name: string;
  description: string;
}

export const BrandHeader: FC<BrandHeaderProps> = ({ imageUrl, name, description }) => {
  const [isImageLoad, setIsImageLoad] = useState<boolean>(true);

  return (
    <header className="brand-header" style={{ opacity: isImageLoad ? 0 : 1 }}>
      <div className="brand-header__wrapper">
        {isImageLoad && (
          <img src={brandPlaceholder} alt="image placeholder" className="brand-header__image" />
        )}
        <img
          src={imageUrl}
          alt="brand image"
          className="brand-header__image"
          onLoad={() => setIsImageLoad(false)}
        />
        <div>
          <h1 className="brand-header__name">{name}</h1>
          <p className="brand-header__descr">{description}</p>
        </div>
      </div>
    </header>
  );
};
