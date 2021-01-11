import React, { Fragment } from 'react';
import CounterContext from '../contexts/counter';

const Counter = () => {
  return (
    <CounterContext.Consumer>
      {({ count, increment, decrement }) => {
        return (
          <Fragment>
            <div>count: {count}</div>
            <button onClick={increment}>+1</button>
            <button onClick={decrement}>-1</button>
          </Fragment>
        );
      }}
    </CounterContext.Consumer>
  );
};
export default Counter;
