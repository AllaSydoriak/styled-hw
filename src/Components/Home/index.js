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
  const isPositiveRes = result === 'like';

  const onClick = (value) => {
    setResult(value);
  };

  return (
    <Wrapper>
      <Title color="#ff79d5">styled-components 💅</Title>
      {result
        ? (
          <Result as={isPositiveRes ? 'a' : 'p'} href={isPositiveRes ? 'https://styled-components.com/docs/basics#getting-started' : null}>
            {isPositiveRes ? '👌' : '😝'}
          </Result>
        ) : (
          <ButtonsWrapper>
            <PlainButton onClick={() => onClick('like')} type="plain">🤍</PlainButton>
            <PlainButton onClick={() => onClick('dislike')} type="plain">👎</PlainButton>
          </ButtonsWrapper>
        )}
    </Wrapper>
  );
};

export default App;
