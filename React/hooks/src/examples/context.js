import React from 'react';
import Alert from './alert/Alert';
import Main from './Main';
import { AlertProvider } from './alert/AlertContext';
import './App.css';



function App() {
  return (
    <AlertProvider>
      <div className="App">
        <Alert />
        <Main toggle={ ()=>{}} />
      </div>
    </AlertProvider>
    
  );
}

export default App;
