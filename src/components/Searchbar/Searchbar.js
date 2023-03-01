import React, { Component } from 'react';
import {
  StyledHeader,
  StyledForm,
  StyledSearchButton,
  StyledSpan,
  StyledInput,
} from './Searchbar.styled';
import PropTypes from 'prop-types';

export class Searchbar extends Component {
  render() {
    const { onSearchImage } = this.props;
    return (
      <StyledHeader>
        <StyledForm onSubmit={onSearchImage}>
          <StyledSearchButton type="submit">
            <StyledSpan className="StyledButton-label">Search</StyledSpan>
          </StyledSearchButton>

          <StyledInput
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
  }
}

Searchbar.propTypes = {
  onSearchImage: PropTypes.func,
};
