import React from 'react';
import Home from './componants/Home';
import './style.css';
import Aboutus from './componants/Aboutus';
import Contact from './componants/Contact';
import Navbar from './componants/Navbar';
import {
  BrowserRouter as R,
  Routes,
  Route
} from "react-router-dom";

export default function App(){
  return(
    <div>
      <R>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/contact" element={<Contact/>}/>
          <Route path="/about" element={<Aboutus/>} />
        
        </Routes>
      </R>
    </div>
  );
}
