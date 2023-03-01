import React, { Component } from 'react';
import { StyledSkeleton } from './Loader.styled';

export class Loader extends Component {
  render() {
    const skeletonArray = [];
    for (let i = 1; i <= 12; i++) {
      skeletonArray.push(<StyledSkeleton key={`loader${1}`}></StyledSkeleton>);
    }
    return skeletonArray;
  }
}
