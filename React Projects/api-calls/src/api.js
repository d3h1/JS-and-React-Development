import axios from 'axios';

const searchImages = async (term) => {
  const response = await axios.get("https://api.unsplash.com/search/photos", {
    headers: {
      Authorization: 'Client-ID U_6x3Y62y7qYVlth5dIYu9LIB1zlOnAORcQmYA8UT2g'
    },
    params: {
      query: term,
    }
  });
  // This will allow us to just return the array of images we are looking for versus the entire GET object 
  return response.data.results;
}

export default searchImages;