import React from 'react';

import logo from '../../assets/logo.svg';
import './styled.css';

import styled from '../../helpers/styled';

const Div = styled.div`
  background-color: red;
  color: ${(props) => props.color};
  text-decoration: ${(props) => props.isLink ? 'underline' : 'none'};
`;

const PlainButton = styled.button`
  cursor: pointer;
  font-size: 18px;
  margin-top: 10px;
  border-radius: 6px;
  padding: 10px 20px;
  background-color: transparent;
  color: ${(props) => props.type === 'plain' ? 'white' : 'yellow' };
  border: 1px solid ${(props) => props.type === 'plain' ? 'white' : 'yellow' };;
`;

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Div color="white">my div</Div>
        <PlainButton type="color">My button</PlainButton>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
};

export default App;
