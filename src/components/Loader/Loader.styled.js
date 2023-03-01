import styled from 'styled-components';

export const StyledLoader = styled.p`
  color: blue;
  font-size: 20px;
`;

export const StyledSkeleton = styled.li`
  width: 100%;
  height: 260px;
  background: linear-gradient(
      to right,
      rgba(255, 255, 255, 0),
      rgba(255, 255, 255, 0.5) 50%,
      rgba(255, 255, 255, 0) 80%
    ),
    lightgray;
  background-repeat: repeat-y;
  background-size: 50px 500px;
  background-position: 0 0;
  animation: shine 1s infinite;
  @keyframes shine {
    to {
      background-position: 100% 0, 0 0;
    }
  }
`;
