import React from 'react';
import { useState } from 'react';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Login from './pages/Login'
import AddBook from './pages/AddBook.jsx'
import {BrowserRouter,Routes,Route}  from 'react-router-dom';
import Navbar from './Components/Navbar';
import Signin from './Components/Signin';
function App(){
  return(
      <BrowserRouter>
      <Navbar/>
          <Routes>
              <Route path="/" element={<Home/>}> </Route>
              <Route path="/about" element={<About/>}></Route>
              <Route path="/contact" element={<Contact/>}></Route>
              <Route path="/login" element={<Login/>}></Route>
              <Route path="/Addbook" element={<AddBook/>}></Route>
              <Route path="/signin" element={<Signin/>}></Route>
          </Routes>
      </BrowserRouter>

  )
}
export default App;
