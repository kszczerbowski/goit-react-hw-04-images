import React, { Component } from 'react';
import { StyledLoadButton } from './Button.styled';
import PropTypes from 'prop-types';

export class Button extends Component {
  render() {
    return (
      <StyledLoadButton onClick={this.props.onLoadMore} type="button">
        Load more
      </StyledLoadButton>
    );
  }
}

Button.propTypes = {
  onLoadMore: PropTypes.func,
};
