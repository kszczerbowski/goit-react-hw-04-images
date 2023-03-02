import React from 'react';
import { StyledLoadButton } from './Button.styled';
import PropTypes from 'prop-types';

export const Button = ({ onLoadMore }) => {
  return (
    <StyledLoadButton onClick={onLoadMore} type="button">
      Load more
    </StyledLoadButton>
  );
};

Button.propTypes = {
  onLoadMore: PropTypes.func,
};
