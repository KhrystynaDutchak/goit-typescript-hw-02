import React from 'react';
import ImageCard from '../ImageCard/ImageCard';
import css from './ImageGallery.module.css';
import { Image } from '../ApiService/ApiServiceType';

interface ImageGalleryProps {
  images: Image[];
  onImageClick: (imageUrl: string) => void;
}

const ImageGallery: React.FC<ImageGalleryProps> = ({ images, onImageClick }) => {
  const handleClick = (imageUrl: string) => {
    onImageClick(imageUrl);
  };

  return (
    <ul className={css.gallery}>
      {images.map((image) => (
        <li key={image.id} className={css.elem} onClick={() => handleClick(image.urls.regular)}>
          <div className={css.imageInner}><ImageCard image={image} /></div>
        </li>
      ))}
    </ul>
  );
};

export default ImageGallery;