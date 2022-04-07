import * as React from "react";
import * as ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Mentors from './views/findMentors';
import Login from './components/Login';
import Teste from './teste.js';
import './App.scss';
import Mensagem from "./components/chat";

import Navigation from './components/Navigation';

const App = () => {
  return (
    <BrowserRouter>
      <Navigation/>
      <Routes>
        <Route path="/buscar" element={<Mentors />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/teste" element={<Teste />}></Route>
        <Route path="/chat" element={<Mensagem />}></Route>
      </Routes>
    </BrowserRouter>
  );
  
}

export default App;