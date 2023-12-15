import './App.css';
import Navbars from './components/Navbars';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/Home';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Popup from './components/Popup';
import { useState } from 'react';


function App() {

   const [pushh,setpushh] = useState(true)

  function handleclick(item){
    setpushh(item);
  //   console.log(pushh)
   }
  return <>
    <Router>   
        <Navbars />
        <Routes>
          <Route path="/" element={<Home handleclick={handleclick}/>} />
          <Route path="/pop" element={<Popup pushh={pushh} />} />
        </Routes>
     
    </Router>
  </>

}

export default App;
