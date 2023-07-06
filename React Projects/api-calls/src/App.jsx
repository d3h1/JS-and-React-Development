import React from 'react'
import Searchbar from './Components/Searchbar'
import searchImages from './api'

const App = () => {
  const handleSubmit = (term) => {
    console.log('Do a search with: ', term);
    // searchImages(term)
  }

  return (
    <div>
      <Searchbar onSubmit={handleSubmit}/>
    </div>
  )
}

export default App