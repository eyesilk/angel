import { FC, useState } from 'react';
import './landing-brand.scss';

interface LandingBrandProps {
  image: string;
  name: string;
}

export const LandingBrand: FC<LandingBrandProps> = ({ image, name }) => {
  const [isImageLoad, setIsImageLoad] = useState<boolean>(true);

  return (
    <div className="ent-brand" style={{ opacity: isImageLoad ? 0 : 1 }}>
      <img src={image} alt={name} onLoad={() => setIsImageLoad(false)} />
      <span>{name}</span>
    </div>
  );
};
