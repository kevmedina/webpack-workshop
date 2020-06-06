import React, { useState } from 'react';
import { hot } from 'react-hot-loader';
import styled from 'styled-components';

const Text = styled.p`
  color: ${(props) => (props.color.counter < 2 ? 'red' : 'blue')};
`;

const App = () => {
  const [state, setState] = useState({ counter: 0 });

  return (
    <div>
      <Text color={state}>Counter: {state.counter}</Text>
      <button onClick={() => setState((prev) => ({ counter: prev.counter + 1 }))}>+</button>
    </div>
  );
};

export default hot(module)(App);
