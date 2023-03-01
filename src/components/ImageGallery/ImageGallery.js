import React, { Component } from 'react';
import { StyledImageGallery } from './ImageGallery.styled';
import PropTypes from 'prop-types';

export class ImageGallery extends Component {
  render() {
    return <StyledImageGallery>{this.props.children}</StyledImageGallery>;
  }
}

ImageGallery.propTypes = {
  children: PropTypes.arrayOf(PropTypes.element),
};
