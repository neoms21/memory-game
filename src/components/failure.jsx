import React from 'react';
import { ErrorDiv } from '../styles/styles';

const Failure = ({ isGameOver , score}) => {
  return isGameOver ? <ErrorDiv id="error">You lost the game!! you score is {score}</ErrorDiv> : null;
};

export default Failure;
