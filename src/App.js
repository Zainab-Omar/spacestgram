// import './App.css';
import axios from "axios";
import React, { useState } from 'react'

const url = `https://api.nasa.gov/planetary/apod?api_key=${process.env.React_APP_KEY}`

function App() {
  return (
    <div className="App">
    Hello React
    </div>
  );
}

export default App;
