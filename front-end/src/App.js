import * as React from "react";
import * as ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Mentors from './views/findMentors';
import Login from './components/Login';
import Teste from './teste.js';
import './App.scss';

import Navbar from './components/Navbar';

const App = () => {
  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/buscar" element={<Mentors />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/teste" element={<Teste />}></Route>
      </Routes>
    </BrowserRouter>
  );
  
}

export default App;

