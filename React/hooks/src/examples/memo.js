import React, {useState, useEffect, useRef, useMemo} from 'react';
import './App.css';

function complexComput(num) {
  console.log('complexComput')
  let i = 0
  while(i<1000000000) i++
  return num*2
}

function App() {
  const [number, setNumber] = useState(42)
  const [colored, setColored]=useState(false)

  const styles = useMemo(()=>({
    color: colored ? 'darkred':'black'
  }),[colored])

  const computed = useMemo(() => {
    return complexComput(number)
  }, [number])

  useEffect(() => {
    console.log('Styles change')
  },[styles])

  return (
    <div className="App">
      <h1 style={styles}>Вычесляемое число: {number}</h1>
      <button onClick={()=>setNumber(prev=>prev+1)}>Add</button>
      <button onClick={() => setNumber(prev => prev - 1)}>Delete</button>
      <button onClick={()=>setColored(prev=>!prev)}>Change</button>
    </div>
  );
}

export default App;
