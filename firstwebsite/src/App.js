import React, { useEffect, useState } from 'react';
import './App.css'
import CurrencyRow from './CurrencyRow';

function App() {
  const [currencyOptions, setCurrencyOptions] = useState([])
  console.log(currencyOptions)

  return (
    <>
      <h1>Currency Converter</h1>
      <h2>Convert</h2>
      <CurrencyRow />
      <div className="equals">=</div>
      <CurrencyRow />
    </>


  )
}

export default App;
