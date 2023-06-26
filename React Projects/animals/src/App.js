import React from 'react'
import { useState } from 'react'
import AnimalShow from './AnimalShow'

function App() {
  const [count, setCount] = useState(0)
  

  const handleClick = () => {
    setCount(count + 1) 
    console.log('clicked');
  }
  
  

  return (
    <div className='container'>
      <button onClick={handleClick}>Add To List</button>   
      <small>Items to show: {count}</small>   
    </div>
  )
}

export default App