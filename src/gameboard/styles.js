import styled from 'styled-components';

export const ResultsDiv = styled.div`
  display: flex;
  flex-direction: column;
  border: solid 1px black;
  margin: 16px;
  padding: 20px;
`;

export const MemoryDiv = styled.div`
  display: flex;
  flex-direction: column;
  border: solid 1px black;
  margin: 16px;
  padding: 20px;
`;

export const BlocksDiv = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export const ErrorDiv = styled.div`
  background: #c42d2d;
  color: #fff;
  padding: 8px;
`;

export const SuccessDiv = styled.div`
  background: #21b241;
  color: #fff;
  padding: 8px;
`;

export const Button = styled.button`
  padding: 8px 16px;
  font-size: 12px;
  font-weight: bold;
  border: none;
  background: #4eb264;
  color: #fff;
`;
