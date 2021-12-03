import './App.css';
import React, {useState} from 'react'
import Alerts from './Components/Alerts/Alerts';
import About from './Components/About';
import Navbar from './Components/Navbar';
import Textform from './Components/TextForm/TextForm';
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";

function App() {
  const [alert, setAlert] = useState(null)
  const showAlertMsg=(message)=>{
    setAlert({
      msg:message
    })
    setTimeout(() => {
      setAlert(null)
    }, 1400);
  }        
  return (   
  <>
    <Router>
      <div className="App">
        <Navbar brand="Text-Utils" />
        <Alerts alertMSG={alert}/>
        <Routes>
          <Route path="/about" element={<About statusAbout="active"/>}  />
          <Route path="/"  element= {<Textform showAlertMsg={showAlertMsg} heading="Enter the text to analyze below! " statusHome="active"/>} />
        </Routes>
      </div>
    </Router>
  </>
  );
}

export default App;
