import axios from 'axios';

const searchImages = async () => {
  const response = await axios.get("https://api.unsplash.com/search/photos", {
    headers: {
      Authorization: 'Client-ID U_6x3Y62y7qYVlth5dIYu9LIB1zlOnAORcQmYA8UT2g'
    },
    params: {
      query: 'cars'
    }
  });
  console.log(response);
  return response;
}

export default searchImages;