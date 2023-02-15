//import logo from './logo.svg';
//import './App.css';
import Navbar from "./Navbar";
import Formtext from "./Formtext";
import About from "./About";
import React, { useState } from 'react'
import Alert from "./Alert";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  Outlet
} from "react-router-dom"
function App() {
  const [mode, setmode] = useState("light") //whether dark mode is enabled or not
  const [alert, setalert] = useState(null)
  const showAlert = (message, type) => { //message and type are given as parameters
    setalert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setalert(null);
    }, 1500);
  }
  const toggleMode = () => {
    if (mode === "light") {
      setmode("dark")
      document.body.style.backgroundColor = "rgb(60, 60, 60)"
      showAlert("dark mode has been enabled", "success")
    }
    else {
      setmode("light")
      document.body.style.backgroundColor = "white"
      showAlert("white mode has been enabled", "success")
    }
  }

  return (
      <Router>
         <Navbar title="Textutils" aboutText="About Textutils" mode={mode} toggleMode={toggleMode} />
         <Alert alert={alert} />
        <div className="container my-3">  {/*container is a bootstrap class used centre the elements in it and my-3 is used to give margin across Y axis of 3 units  */}
          {/* <Routes>
            <Route  path="/about" element = {<About  mode = {mode}/>} />
            <Route  path="/" element = {<Formtext heading="Enter the text to analyze below " mode={mode} showAlert={showAlert} />} />
          </Routes> */}
        </div>
      </Router>
  );
}


export default App;
