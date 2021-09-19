// import './App.css';
import axios from "axios";
import React, { useState, useEffect} from 'react'
import ImagesDisplay from "./ImagesDisplay"
const url =`https://api.nasa.gov/planetary/apod?api_key=${process.env.REACT_APP_KEY}&count=5`

function App() {
  const [images, setImages] = useState([])
  const [loading, setLoading] = useState(true)

  const fetchData = async () => {
    setLoading(true)
    const response = await fetch(url)
    const data = await response.json()
    .then (data => setImages(data))
    setLoading(false)
  }

  

  useEffect(() => {
    fetchData()
  },[])

  return (
    <div className="App">
    Hello React
    </div>
  );
}

export default App;
