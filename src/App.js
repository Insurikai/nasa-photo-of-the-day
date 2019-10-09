import React,{useState, useEffect} from "react";
import Axios from 'axios';
import "./App.css";

function App() {
  const [apod, setApod] = useState({});
  useEffect(()=>{
    Axios.get()
    .then(response=>{
      setApod(response);
    })
    .catch(error=>{
      console.log(error);
    })
  },[]);
  return (
    <div className="App">
      <p>
        Read through the instructions in the README.md file to build your NASA
        app! Have fun 🚀!
      </p>
    </div>
  );
}

export default App;
