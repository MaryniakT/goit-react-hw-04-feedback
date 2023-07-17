import styled from 'styled-components';

export const FeedbButtons = styled.div `
  filter: drop-shadow(3px 10px 15px rgba(0, 0, 0, 0.45));
`;

export const Button = styled.button`
  height: 50px;
  width: 100px;
  background: linear-gradient(to bottom, #2962cc, #eef151);
  font-weight: bold;
  color: white;
  font-size: 1.2rem;
  border: none;
  margin: -5px;
  padding: 0;
  stroke: black;
  outline: none;

  &:nth-child(1) {
    border-radius: 20px 0 0 20px;
  }
  &:nth-child(3) {
    border-radius: 0 20px 20px 0;
  }
  &:hover {
    cursor: pointer;
    filter: drop-shadow(3px 5px 5px rgba(0, 0, 0, 0.45));
  }
  &:active {
    filter: none;
    transform: scale(0.95);
  }
`;