import React from 'react'
import { useState } from 'react'
import ItemShow from './ItemShow'
import './App.css'

function getRandomItem () {
  const items = ['bird', 'cow', 'cat', 'dog', 'gator', 'horse']

  return items[Math.floor(Math.random() * items.length)]
}


function App() {
  // const [items, setItems] = useState('')
  const [items, setItems] = useState([])

  // This is how we do an array, also how useState works pretty much
  // const makeArray = () => {
  //   return [1,2,5,10];
  // }
  // const [firstEle, secondEle, thirdEle, fourthEle] = makeArray()
  // console.log(firstEle, secondEle, thirdEle, fourthEle);


  

  const handleClick = () => {
    // ? This modifies a piece of state which we never want to do
    // items.push(getRandomItem())

    // *! This is the proper way to do it!
    // * setItems  [(all items from previous array), (getRandomItem function for new item)]
    setItems([...items, getRandomItem()])
    console.log('clicked');
  }

  // Mapping through a listl
  const renderedItems = items.map((item, index) => {
    return <ItemShow type={item} key={index} />
  })
  
  

  return (
    <div className='container'>
      <button className='add-button' onClick={handleClick}>Add To List</button>   
      <div className='animal-list'>{renderedItems}</div>
    </div>
  )
}

export default App