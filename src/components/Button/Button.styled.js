import styled from 'styled-components';

export const StyledLoadButton = styled.button`
  display: block;
  margin: 10px auto;
  padding: 5px 10px;
  background-color: #3c54b4;
  color: aliceblue;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition-duration: 300ms;
  transition-property: background-color;
  &:hover,
  &:focus {
    background-color: #273775;
  }
`;
