import React from 'react';
import { StyledSkeleton } from './Loader.styled';

export const Loader = () => {
  const skeletonArray = [];
  for (let i = 1; i <= 12; i++) {
    skeletonArray.push(<StyledSkeleton key={`loader${i}`}></StyledSkeleton>);
  }
  return skeletonArray;
};
