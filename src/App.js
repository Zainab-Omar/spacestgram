import './App.css';
import axios from "axios";
import React, { useState, useEffect} from 'react'
import ImagesDisplay from "./ImagesDisplay"
const url =`https://api.nasa.gov/planetary/apod?api_key=${process.env.REACT_APP_KEY}&count=10`

function App() {
  const [images, setImages] = useState([])

  const fetchData = async () => {
    const result = await axios.get(url)
    setImages(result.data)
   
  }

  useEffect(() => {
    fetchData()
  },[])

  return (
    <div className="App">
      <h1 className="page-title">Welcome to SpaceStagram!</h1>
      <ImagesDisplay images={images} />
    </div>
  );
}

export default App;
