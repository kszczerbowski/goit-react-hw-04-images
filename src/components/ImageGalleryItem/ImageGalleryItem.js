import { StyledImageGalleryItem, StyledImage } from './ImageGalleryItem.styled';
import React from 'react';
import PropTypes from 'prop-types';

export const ImageGalleryItem = ({ smallImage, largeImage, onClick }) => {
  return (
    <StyledImageGalleryItem
      onClick={() => {
        onClick(largeImage);
      }}
    >
      <StyledImage src={smallImage} alt="" />
    </StyledImageGalleryItem>
  );
};

ImageGalleryItem.propTypes = {
  smallImage: PropTypes.string,
  largeImage: PropTypes.string,
  onClick: PropTypes.func,
};
