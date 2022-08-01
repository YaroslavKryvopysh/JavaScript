import React, {useState, useEffect, useRef} from 'react';
import './App.css';



function App() {
  const [value, setValue] = useState('initial')
  const renderCount = useRef(1)
  const inputRef = useRef(null)
  const prevValue=useRef('')
  
  useEffect(() => {
    renderCount.current++
  })

  useEffect(() => {
    prevValue.current=value
  },[value])

  const focus=()=>inputRef.current.focus()

  return (
    <div className="App">
      <h1>Number of renders: {renderCount.current}</h1>
      <h2>Previse value: { prevValue.current }</h2>
      <input ref={inputRef} type="text" onChange={e => setValue(e.target.value)} value={value} />
      <button onClick={focus}>Focus</button>
    </div>
  );
}

export default App;
