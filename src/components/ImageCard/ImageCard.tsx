import React from 'react';
import css from './ImageCard.module.css';

interface ImageCardProps {
  image: {
    urls: {
      regular: string;
    };
    alt_description: string;
  };
}

const ImageCard: React.FC<ImageCardProps> = ({ image }) => {
  return (
    <img src={image.urls.regular} alt={image.alt_description} className={css.image} />
  );
};

export default ImageCard;