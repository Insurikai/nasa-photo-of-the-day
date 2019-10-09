import React,{useState, useEffect} from "react";
import Axios from 'axios';
import "./App.css";
import ApodContainer from "./components/ApodContainer";

function App() {
  const [apod, setApod] = useState({});
  useEffect(()=>{
    Axios.get('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY')
    .then(response=>{
      setApod(response);
    })
    .catch(error=>{
      console.log(error);
    })
  },[]);
  return (
    <div className="App">
      <div className="container">
        <ApodContainer data={apod}/>
      </div>
    </div>
  );
}

export default App;
