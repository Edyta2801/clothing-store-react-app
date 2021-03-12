import React, {useState, useEffect} from 'react';
import axios from 'axios';

const clientID = `?client_id=${process.env.REACT_APP_ACCESS_KEY}`;
const searchUrl= `https://api.unsplash.com/photos/`;
// const urlQuery =`&query=fashion`;
// `&query=${query}`

function Slider() {
  const [images, setImages] = useState([]);


  useEffect(() => {
    axios.get(`${searchUrl}${clientID}`)
    // `${searchUrl}${clientID}${urlPage}${urlQuery}`
    .then(response => setImages(response.data));
  }, []);
console.log(images);

  return (
    <div>
      {images.map(image => (
        <div key={image.id}>
          <h2>
            {image}
          </h2>
        </div>
      ))}
    </div>
  );
}

export default Slider;
