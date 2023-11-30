import React, { useState } from 'react';
// import { Button } from '../buttons/Button';
import { ButtonGroup, Button, Typography, Box } from '@mui/material';

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
    <Box p={2} m={2} borderRadius={16} bgcolor={{xs:"primary.main", md:"success.main"}}>
    {/* <div className="counter-container"> */}
      {/* <h2 id="counter">{counter}</h2> */}
      <Typography sx={{ fontSize: { xs: "2rem", sm: "4rem", md: "6rem", lg: "8rem" } }} variant="h1" component="p">{counter}</Typography>
      <div id="buttons">
        <ButtonGroup variant="contained" aria-label="outlined primary button group">
          <Button onClick={handleIncrement}>Add</Button>
          <Button onClick={handleDecrement}>Less</Button>
          <Button onClick={handleReset}>Reset</Button>
          {/* <button onClick={()=>setCounter(0)} id="restart" type="button">Restart</button> */}
        </ButtonGroup>

      </div>
    {/* </div> */}
    </Box>
  );

  return counterComponent;
};

export default CounterApp;