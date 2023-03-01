import React, { Component } from 'react';
import { StyledOverlay, StyledModal } from './Modal.styled';
import PropTypes from 'prop-types';

export class Modal extends Component {
  render() {
    const { onBackgroundClick, largeImageURL } = this.props;
    return (
      <StyledOverlay onClick={onBackgroundClick}>
        <StyledModal>
          <img src={largeImageURL} alt="" />
        </StyledModal>
      </StyledOverlay>
    );
  }
}

Modal.propTypes = {
  onBackgroundClick: PropTypes.func,
  largeImageURL: PropTypes.string,
};
