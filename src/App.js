import React from 'react';
import { hot } from 'react-hot-loader';

class App extends React.Component {
  state = { counter: 0 };

  render() {
    return (
      <div>
        <p>Counter: {this.state.counter}</p>
        <button onClick={() => this.setState((prev) => ({ counter: prev.counter + 1 }))}>+</button>
      </div>
    );
  }
}

export default hot(module)(App);
