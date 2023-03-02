import React from 'react';
import { StyledOverlay, StyledModal } from './Modal.styled';
import PropTypes from 'prop-types';

export const Modal = ({ onBackgroundClick, largeImageURL }) => {
  return (
    <StyledOverlay onClick={onBackgroundClick}>
      <StyledModal>
        <img src={largeImageURL} alt="" />
      </StyledModal>
    </StyledOverlay>
  );
};

Modal.propTypes = {
  onBackgroundClick: PropTypes.func,
  largeImageURL: PropTypes.string,
};
