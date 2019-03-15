import React from 'react';

import styled from 'styled-components';
const SquareDiv = styled.div`
  height: 70px;
  width: 70px;
  background: ${props => props.color};
  margin: 10px;
`;
const Square = ({ color, handleClick }) => {
  return (
    <SquareDiv
      color={color}
      onClick={() => {
        if (handleClick) handleClick(color);
      }}
    />
  );
};
export default Square;
