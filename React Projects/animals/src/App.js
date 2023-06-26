import React from 'react'
import { useState } from 'react'
import AnimalShow from './AnimalShow'

function App() {
  const handleClick = () => {
    console.log('clicked');
  }
  return (
    <div>
      <button onClick={handleClick}>Add To List</button>      
    </div>
  )
}

export default App