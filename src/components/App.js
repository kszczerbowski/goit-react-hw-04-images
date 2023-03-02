import React, { useEffect, useState } from 'react';
import { StyledContainer } from './App.styled';
import { Searchbar } from './Searchbar/Searchbar';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { ImageGalleryItem } from './ImageGalleryItem/ImageGalleryItem';
import { Loader } from './Loader/Loader';
import { Button } from './Button/Button';
import { Modal } from './Modal/Modal';
import axios from 'axios';

export const App = () => {
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [query, setQuery] = useState('');
  const [pageNumber, setPageNumber] = useState(1);
  const [showModal, setShowModal] = useState(false);
  const [modalPictureURL, setModalPictureURL] = useState('');
  const [shouldReload, setShouldReload] = useState(false);

  const fetchImages = async () => {
    setPageNumber(pageNumber + 1);
    setIsLoading(true);
    const searchParams = new URLSearchParams({
      key: '31853975-bc1b1ba443a9213885c0622f6',
      q: query,
      image_type: 'photo',
      orientation: 'horizontal',
      safesearch: true,
      page: pageNumber,
      per_page: 12,
    });
    const response = await axios.get(
      `https://pixabay.com/api/?${searchParams}`
    );
    const foundImages = response.data.hits;
    setIsLoading(false);
    !shouldReload && setImages([...images, ...foundImages]);
    shouldReload && setImages([...foundImages]);
    setShouldReload(false);
  };

  const handleSearchImage = event => {
    event.preventDefault();
    setImages([]);
    if (query === '') return;
    fetchImages();
  };

  const handleImageClick = largeImage => {
    setShowModal(true);
    setModalPictureURL(largeImage);
  };

  const handleModalClose = event => {
    if (event.target === event.currentTarget) setShowModal(false);
  };

  const handleEscapeKey = event => {
    if (event.key === 'Escape') setShowModal(false);
  };

  useEffect(() => {
    setPageNumber(1);
    setShouldReload(true);
  }, [query]);

  document.addEventListener('keydown', handleEscapeKey);
  return (
    <StyledContainer>
      <Searchbar onChange={setQuery} onSearchImage={handleSearchImage} />
      <ImageGallery>
        {images.map(image => {
          return (
            <ImageGalleryItem
              onClick={handleImageClick}
              key={image.id}
              smallImage={image.webformatURL}
              largeImage={image.largeImageURL}
              id={image.id}
            />
          );
        })}
        {isLoading && <Loader />}
      </ImageGallery>
      {showModal && (
        <Modal
          onBackgroundClick={handleModalClose}
          largeImageURL={modalPictureURL}
        />
      )}
      {pageNumber > 1 && <Button onLoadMore={fetchImages} />}
    </StyledContainer>
  );
};
