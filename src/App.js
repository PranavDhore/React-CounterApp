import React, {useState} from 'react';
import './App.css';

function App() {

  const [counter,setCounter] = useState(0);

  const handleCounter = () => {
    setCounter(counter + 1);
  }
  const handleReset = () => {
    setCounter(0);
  }

  return (
    <div className="counter-app">
      <h1>Counter App</h1>
      <div className="counter-head">
        <input type="text" value={counter} />
      </div>
      <div className="counter-body">
        <button onClick={handleCounter}>ADD</button>
        <button onClick={handleReset}>RESET</button>
      </div>
    </div>
  );
}

export default App;
