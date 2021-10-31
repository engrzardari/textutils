import React, {useState} from 'react'
import './App.css';
import About from './components/About';
import Alert from './components/Alert';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';

// import {
//   BrowserRouter as Router,
//   Switch,
//   Route
// } from "react-router-dom";

function App() {
  const[mode,setMode] = useState('light');
  const[alert,setAlert] = useState(null);

  const toggleMode =()=>{
    if(mode==='light'){
      setMode('dark')
      showAlert('Dark Mode has been activated.', 'success ');
      document.title='TextUtils - Dark Mode'
    }
    else
    {
      setMode('light')
      showAlert('Light Mode has been activated.', 'success ')
      document.title='TextUtils - Home'
    }
    // setInterval(() => {
    //   document.title='TextUtils is an Amazing App'
    // }, 2000);

    // setInterval(() => {
    //   document.title='TextUtils - Home'
    // }, 1500);


  }
  // to show alert 
  const showAlert =(message, type)=>{
    setAlert({
    msg:message,
    type : type  
    })
    setTimeout(()=>{ 
      setAlert(null)
    }, 5000);
  }


  return (
    <>
      {/* <Router> */}
      <Navbar title='TextUtils' aboutSite='About' mode={mode} toggleMode={toggleMode}/>
      <Alert alert={alert}/>
      
        {/* <Switch>
          <Route exact path="/about">
            <About />
          </Route>
          <Route exact path="/"> */}
            <TextForm showAlert={showAlert} heading="Enter your text here" mode={mode} toggleMode={toggleMode}/>
          {/* </Route>
        </Switch>
      </Router> */}
    </>
  );
}

export default App;
