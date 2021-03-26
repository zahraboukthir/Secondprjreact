import React from "react";
import './App.css';
import Dev from './video/Dev.mp4'
import img from './gomycode.jpg';
function App() {
  return (
    <div className="App">
      <h1 class = "title_red"> Zahra Boukthir </h1>
      <a href="#">
      <h1>image from src folder</h1>
      <img src={img} alt ='myImage' />
      </a>
      
      <br></br>
      <a href="#" >
      <h1>image from public folder</h1>
      </a>
      
      <img src="/gomycodepl.png" alt="myimage" />
      <br></br>
      <a href="#">
      <h1>the video</h1>
      </a>
      <video width="320" height="240" controls >
      <source src={Dev} type="video/mp4"/>
      </video>
      
      <br></br>
    </div>
  );
}

export default App;
