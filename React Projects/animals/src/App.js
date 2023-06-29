import React from 'react'
import { useState } from 'react'
import AnimalShow from './AnimalShow'

function getRandomItem () {
  const items = ['bird', 'cow', 'cat', 'dog', 'gator', 'horse']

  return items[Math.floor(Math.random() * items.length)]
}


function App() {
  const [items, setItems] = useState('')

  // This is how we do an array, also how useState works pretty much
  // const makeArray = () => {
  //   return [1,2,5,10];
  // }
  // const [firstEle, secondEle, thirdEle, fourthEle] = makeArray()
  // console.log(firstEle, secondEle, thirdEle, fourthEle);


  

  const handleClick = () => {
    setItems()
    console.log('clicked');
  }
  
  

  return (
    <div className='container'>
      <button onClick={handleClick}>Add To List</button>   
      <p>Item is {items}</p>
    </div>
  )
}

export default App