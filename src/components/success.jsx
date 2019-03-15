import React from 'react';
import { SuccessDiv } from '../styles/styles';

const Success = ({ isGameWon }) => {
  return isGameWon ? <SuccessDiv id="success">Congratulations!!! you won the game.</SuccessDiv> : null;
};

export default Success;
