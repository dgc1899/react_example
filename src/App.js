import { useState, useEffect } from 'react';
import './App.css';

const App = () => {
  const [counter,setCounter] = useState(0);

  useEffect(() => {
    setCounter(100);
  }, [])

  return (
    <div className="App">
      <button onClick={() => setCounter((prevCount) => prevCount - 1 )}>-</button>
      <h2>{counter}</h2>
      <button onClick={() => setCounter((prevCount) => prevCount + 1)}>+</button>
    </div>
  );
}

export default App;
