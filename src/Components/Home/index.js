import React from 'react';

import logo from '../../assets/logo.svg';
import './styled.css';

import styled from '../../helpers/styled';

const Div = styled.div`
  background-color: red;
  color: ${(props) => props.color};
  text-decoration: ${(props) => props.isLink ? 'underlined' : 'none'};
`;

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Div isLink={false} color="white">my div</Div>
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
