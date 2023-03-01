import { StyledImageGalleryItem, StyledImage } from './ImageGalleryItem.styled';
import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class ImageGalleryItem extends Component {
  render() {
    const { smallImage, largeImage, onClick } = this.props;
    return (
      <StyledImageGalleryItem
        onClick={() => {
          onClick(largeImage);
        }}
      >
        <StyledImage src={smallImage} alt="" />
      </StyledImageGalleryItem>
    );
  }
}

ImageGalleryItem.propTypes = {
  smallImage: PropTypes.string,
  largeImage: PropTypes.string,
  onClick: PropTypes.func,
};
