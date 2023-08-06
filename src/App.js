import { useState } from "react";

import React from 'react'

const App = () => {

    const [min,setMin] = useState(0)
    const [max,setMax] = useState(10)
    const [randomNum,setRandomNum] = useState(5)

    const handleClick = () => {
      setRandomNum(Math.floor(Math.random() * (max - min + 1)) + min);
      
    }

  return (
    <div>
        <p>Random Number : {randomNum} </p>
        <input value={min} type="number" onChange={e => setMin(e.target.value)}/>
        <input value={max} type="number" onChange={e => setMax(e.target.value)}/>
        <button onClick={handleClick}>Tıkla</button>
    </div>
  )
}

export default App