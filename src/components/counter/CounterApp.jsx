import React, { useState } from 'react';
import {Button} from '../buttons/Button';

// function Counter() {
//     const [count, setCount] = useState(0);
  
//     const increment = () => setCount(count + 1);
//     const decrement = () => setCount(count - 1);
//     const reset = () => setCount(0);
//     return (
//       <div className="App">
//         {/* 
//         Agreguen un componente que tenga lo siguiente componente Cpunter
//         - Valor numerico 0
//         - 3 botones +, -, reset
//         */}
//         <p>Valor numerico: {count}</p>
//         <button onClick={increment}>+</button>
//         <button onClick={decrement}>-</button>
//         <button onClick={reset}>Reset</button>
//       </div>
//     );
//   }
  
//   export default Counter;

const CounterApp = () => {

  const [counter, setCounter] = useState(0);

  const handleIncrement = () => {
    console.log("Pulsaste Add");
    setCounter(counter + 1);
    console.log(counter + 1);
  }
  const handleDecrement = () => {
    console.log("Pulsaste Less");
    setCounter(counter - 1);
    console.log(counter - 1);
  }
  const handleReset = () => {
    console.log("Pulsaste Reset");
    setCounter(0);
    console.log(0);

  }

  const counterComponent = (
    <div className="counter-container">
      <h2 id="counter">{counter}</h2>
      <div id="buttons">
        <Button onClick={handleIncrement}>Add</Button>
        <Button onClick={handleDecrement}>Less</Button>
        <Button onClick={handleReset}>Reset</Button>
        {/* <button onClick={()=>setCounter(0)} id="restart" type="button">Restart</button> */}
      </div>
    </div>
  );

  return counterComponent;
};

export default CounterApp;