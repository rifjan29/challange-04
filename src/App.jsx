import React from 'react';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Home from './pages/Home'
import Pencarian from "./pages/Pencarian";
import Detail from "./pages/Detail"


import './App.css';


function App() {
  return (
      <BrowserRouter>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/cari' element={<Pencarian/> }/>
            <Route path='/:id' element={<Detail/> }/>
        </Routes>
      </BrowserRouter>  
  );
}

export default App;
