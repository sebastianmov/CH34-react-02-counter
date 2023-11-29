import React, { useState } from 'react';
import './App.css';

function Counter() {
  const [count, setCount] = useState(0);

  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);
  const reset = () => setCount(0);
  return (
    <div className="App">
      <h1>Hola</h1>
      {/* 
      Agreguen un componente que tenga lo siguiente componente Cpunter
      - Valor numerico 0
      - 3 botones +, -, reset
      */}
      <p>Valor numerico: {count}</p>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
}

export default Counter;
