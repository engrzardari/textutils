import React, {useState} from 'react'
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';


function App() {
  const[mode,setMode] = useState('light');

  const toggleMode =()=>{
    if(mode==='light'){
      setMode('dark')
    }
    else
    {
      setMode('light')
    }

  }

  return (
    <>
      <Navbar title='TextUtils' aboutSite='About TextUtils' mode={mode} toggleMode={toggleMode}/>
      {<TextForm heading="Enter your text here" mode={mode}/>}
      {/* <About/> */}
    </>
  );
}

export default App;
