import React, { Component } from 'react';
import { StyledContainer } from './App.styled';
import { Searchbar } from './Searchbar/Searchbar';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { ImageGalleryItem } from './ImageGalleryItem/ImageGalleryItem';
import { Loader } from './Loader/Loader';
import { Button } from './Button/Button';
import { Modal } from './Modal/Modal';
import axios from 'axios';

export class App extends Component {
  state = {
    images: [],
    isLoading: false,
    query: '',
    pageNumber: 0,
    showModal: false,
    modalPictureURL: '',
  };

  fetchImages = async () => {
    this.setState(
      () => {
        return {
          pageNumber: this.state.pageNumber + 1,
          isLoading: true,
        };
      },
      async () => {
        const searchParams = new URLSearchParams({
          key: '31853975-bc1b1ba443a9213885c0622f6',
          q: this.state.query,
          image_type: 'photo',
          orientation: 'horizontal',
          safesearch: true,
          page: this.state.pageNumber,
          per_page: 12,
        });
        const response = await axios.get(
          `https://pixabay.com/api/?${searchParams}`
        );
        const foundImages = response.data.hits;
        this.setState({
          isLoading: false,
          images:
            this.state.query === ''
              ? []
              : [...this.state.images, ...foundImages],
        });
      }
    );
  };

  handleSearchImage = async event => {
    event.preventDefault();
    const form = event.target;
    this.setState(
      () => {
        return {
          query: form.elements.imageSearch.value,
          images: [],
        };
      },
      () => {
        if (this.state.query === '') {
          this.setState({ pageNumber: 0 });
          return;
        }
        this.fetchImages();
      }
    );
  };

  handleImageClick = largeImage => {
    this.setState({ showModal: true, modalPictureURL: largeImage });
  };

  handleModalClose = event => {
    if (event.target === event.currentTarget)
      this.setState({ showModal: false });
  };

  handleEscapeKey = event => {
    if (event.key === 'Escape') this.setState({ showModal: false });
  };

  render() {
    document.addEventListener('keydown', this.handleEscapeKey);
    return (
      <StyledContainer>
        <Searchbar onSearchImage={this.handleSearchImage} />
        <ImageGallery>
          {this.state.images.map(image => {
            return (
              <ImageGalleryItem
                onClick={this.handleImageClick}
                key={image.id}
                smallImage={image.webformatURL}
                largeImage={image.largeImageURL}
                id={image.id}
              />
            );
          })}
          {this.state.isLoading && <Loader />}
        </ImageGallery>
        {this.state.showModal && (
          <Modal
            onBackgroundClick={this.handleModalClose}
            largeImageURL={this.state.modalPictureURL}
          />
        )}
        {this.state.pageNumber > 0 && <Button onLoadMore={this.fetchImages} />}
      </StyledContainer>
    );
  }
}
