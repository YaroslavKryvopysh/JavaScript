import React, { useState, useEffect } from 'react';
import './App.css';

function useLogger(value) {
  useEffect(() => {
    console.log('Value chenged: ', value)
  }, [value])
}

function useInput(initialValue) {
  const [value, setValue] = useState(initialValue)

  const onChange = event => {
    setValue(event.target.value)
  }

  const clear = () => setValue('')
  
  return {
    bind: { value, onChange },
    value,
    clear
  }
}

function App() {
  const input=useInput('')
  
  useLogger(input.value)
  return (
    <div className="App">
      <h1>{ input.value }</h1>
      <input type='text' {...input.bind} />
      <button onClick={()=>input.clear()}>Clear</button>
      </div>
  );
}

export default App;