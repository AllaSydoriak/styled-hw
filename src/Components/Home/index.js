import React, { useState } from 'react';

import {
  Title,
  Result,
  Wrapper,
  PlainButton,
  ButtonsWrapper,
} from './styled';

const App = () => {
  const [result, setResult] = useState(null);

  const onClick = (value) => {
    setResult(value === 'like' ? '👌' : '😝');
  };

  return (
    <Wrapper>
      <Title color="#ff79d5">styled-components 💅</Title>
      {result
        ? <Result>{result}</Result>
        : (
          <ButtonsWrapper>
            <PlainButton onClick={() => onClick('like')} type="plain">🤍</PlainButton>
            <PlainButton onClick={() => onClick('dislike')} type="plain">👎</PlainButton>
          </ButtonsWrapper>
        )}
    </Wrapper>
  );
};

export default App;
