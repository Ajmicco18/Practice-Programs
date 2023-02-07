import React, { useEffect, useState } from 'react';
import './App.css'
import CurrencyRow from './CurrencyRow';

const BASE_URL = 'https//api.exchangeratesapi.io/v1/latest'

function App() {
  const [currencyOptions, setCurrencyOptions] = useState([])
  console.log(currencyOptions)

  useEffect(() => {


  }, [])

  return (
    <>
      <h1>Convert</h1>
      <CurrencyRow />
      <div className="equals">=</div>
      <CurrencyRow />
    </>


  )
}

export default App;
