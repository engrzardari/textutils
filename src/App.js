import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
//import TextForm from './components/TextForm';


function App() {
  return (
    <>
      <Navbar title='TextUtils' aboutSite='About TextUtils'/>
      {/* <TextForm heading="Enter your text here"/> */}
      <About/>
    </>
  );
}

export default App;
