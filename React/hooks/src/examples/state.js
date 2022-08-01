import React, {useState} from 'react';
import './App.css';

function computeInitialCounter() {
  console.log('Some calculation...')
  return Math.trunc(Math.random()*20)
}

function App() {
  // const [counter, setCouter] = useState(0)
  // const [counter, setCouter] = useState(computeInitialCounter())
  const [counter, setCouter] = useState(() => {
    return computeInitialCounter()
  })

  const [state, setState] = useState({
    title: 'Counter',
    date:Date.now()
  })

  const increment = () => {
    // setCouter(counter+1)
    setCouter((prevCounter) => {
      return prevCounter+1
    })
    // setCouter(prev=>prev+1)
  }
  const decrement = () => {
    setCouter(counter-1)
  }

  function updateTitle() {
    setState(prev => {
      return {
        ...prev,
        title: 'New title'
      }
    })
  }

  return (
    <div className="App">
      <h1>Counter: { counter }</h1>
      <button onClick={increment}>Add</button>
      <button onClick={decrement}>Delete</button>

      <pre>{JSON.stringify(state, null, 2)}</pre>
      <button onClick={updateTitle}>Chenge Title</button>
    </div>
  );
}

export default App;
