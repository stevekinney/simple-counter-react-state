import React, { Component } from 'react';

class Counter extends Component {
  state = {
    count: 0,
  };

  increment = () => {
    this.setState(({ count }) => ({
      count: count + 1,
    }));
  };

  decrement = () => {
    this.setState(({ count }) => ({
      count: count - 1,
    }));
  };

  reset = () => {
    this.setState(() => ({
      count: 0,
    }));
  };

  render() {
    const { count } = this.state;

    return (
      <div className="Counter">
        <p className="count">{count}</p>
        <section className="controls">
          <button onClick={this.increment}>Increment</button>
          <button onClick={this.decrement}>Decrement</button>
          <button onClick={this.reset}>Reset</button>
        </section>
      </div>
    );
  }
}

export default Counter;
