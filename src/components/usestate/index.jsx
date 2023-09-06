import React, { useState } from 'react';

function CounterApp() {
  const [count, setCount]= useState(``)

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  const reset = () => {
    setCount(0);
  };


  return (
    <div className="counter-app">
      <h2>Counter Application</h2>
      <div>
        <p>Count: {count}</p>
      </div>
      <div className="counter-buttons">
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>
        <button onClick={reset}>Reset</button>
      </div>
    </div>
  );
}

export default CounterApp;
