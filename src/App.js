// import './App.css';
import axios from "axios";
import React, { useState, useEffect} from 'react'
import ImagesDisplay from "./ImagesDisplay"
const url =`https://api.nasa.gov/planetary/apod?api_key=${process.env.REACT_APP_KEY}&count=5`

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
      {console.log(images)}
    Hello React
    </div>
  );
}

export default App;
