// ImageCard.tsx
import React from 'react';
import { Image } from '../ApiService/ApiServiceType';
import css from './ImageCard.module.css';

interface ImageCardProps {
  image: Image;
}

const ImageCard: React.FC<ImageCardProps> = ({ image }) => {
  return (
    <div className={css.card}>
      <img src={image.urls.regular} alt={image.alt_description || ''} className={css.image} />
      <p className={css.description}>{image.description || ''}</p>
    </div>
  );
};

export default ImageCard;