import React, { useState, useEffect } from 'react';
import SearchBar from './components/SearchBar/SearchBar';
import ImageGallery from './components/ImageGallery/ImageGallery';
import Loader from './components/Loader/Loader';
import ErrorMessage from './components/ErrorMessage/ErrorMessage';
import LoadMoreBtn from './components/LoadMoreBtn/LoadMoreBtn';
import ImageModal from './components/ImageModal/ImageModal';
import { Image, FetchPhotosResponse } from './types/ApiServiceType';
import ApiService from './services/ApiService';

const App: React.FC = () => {
  const [query, setQuery] = useState<string>('');
  const [images, setImages] = useState<Image[]>([]);
  const [page, setPage] = useState<number>(1);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const fetchImages = async () => {
    setLoading(true);
    try {
      const response = await ApiService(query, page);
      setImages(prevImages => [...prevImages, ...response.data.results]);
      setPage(prevPage => prevPage + 1);
      setLoading(false);
    } catch (error: any) {
      setError(error.message);
      setLoading(false);
    }
  };

  const handleSubmit = (newQuery: string) => {
    setQuery(newQuery);
    setImages([]);
    setPage(1);
  };

  const handleLoadMore = () => {
    fetchImages();
  };

  const handleImageClick = (imageUrl: string) => {
    setSelectedImage(imageUrl);
  };

  useEffect(() => {
    if (query === '') return;

    fetchImages();
  }, [query]);

  return (
    <div>
      <SearchBar onSubmit={handleSubmit} />
      {error && <ErrorMessage message={error} />}
      <ImageGallery images={images} onImageClick={handleImageClick} />
      {loading && 
        <div className='flexCenter'><Loader /></div>
      }
      {images.length > 0 && !loading && (
        <LoadMoreBtn handleLoadMore={handleLoadMore} />
      )}
      {selectedImage && (
        <ImageModal 
          isOpen={true} 
          onRequestClose={() => setSelectedImage(null)} 
          imageUrl={selectedImage} 
        />
      )}
    </div>
  );
};

export default App;