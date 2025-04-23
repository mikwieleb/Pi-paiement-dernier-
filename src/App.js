import React from 'react';
import PiPaymentButton from './PiPaymentButton';
import './App.css';

function App() {
  return (
    <div className="App">
      <img src="/favicon.ico" alt="Logo Pi" width="100" />
      <h1>Bienvenue sur l'app Pi Test</h1>
      <button onClick={() => window.open('https://app.pi', '_blank')}>
        Ouvrir l'application
      </button>
      <br /><br />
      <PiPaymentButton />
    </div>
  );
}

export default App;
