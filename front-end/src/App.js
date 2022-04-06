import * as React from "react";
import * as ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Mentors from './views/findMentors';
import Login from './components/Login';
import MyVerticallyCenteredModal from './teste.js';
import './App.scss';

import Navigation from './components/Navigation';

const App = () => {
  return (
    <BrowserRouter>
      <Navigation/>
      <Routes>
        <Route path="/buscar" element={<Mentors />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/teste" element={<MyVerticallyCenteredModal />}></Route>
      </Routes>
    </BrowserRouter>
  );
  
}

export default App;