import React, { useState } from "react";
import Searchbar from "./Components/Searchbar";
import ImageList from "./Components/ImageList";
import searchImages from "./api";

const App = () => {
  const [images, setImages] = useState([]);

  const handleSubmit = async (term) => {
    // We need to do this with calls to an API because we need to get a request and a response
    const results = await searchImages(term);
    setImages(results);
  };


  return (
    <div>
      <Searchbar onSubmit={handleSubmit} />
      <ImageList images={images}/>
    </div>
  );
};

export default App;
