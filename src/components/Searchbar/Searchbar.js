import React from 'react';
import {
  StyledHeader,
  StyledForm,
  StyledSearchButton,
  StyledSpan,
  StyledInput,
} from './Searchbar.styled';
import PropTypes from 'prop-types';

export const Searchbar = ({ onSearchImage, onChange }) => {
  return (
    <StyledHeader>
      <StyledForm onSubmit={onSearchImage}>
        <StyledSearchButton type="submit">
          <StyledSpan className="StyledButton-label">Search</StyledSpan>
        </StyledSearchButton>

        <StyledInput
          onChange={event => {
            onChange(event.target.value);
          }}
          name="imageSearch"
          className="input"
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
      </StyledForm>
    </StyledHeader>
  );
};

Searchbar.propTypes = {
  onSearchImage: PropTypes.func,
  onChange: PropTypes.func,
};
