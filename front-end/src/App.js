import * as React from "react";

import { BrowserRouter, Routes,Route} from "react-router-dom";
import Mentors from './views/findMentors';
import Login from './components/Login';
import Teste from './teste.js';
import './App.scss';
import Mensagem from "./components/chat";
import Navigation from './components/Navigation';

import * as ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import FindMentors from './views/SearchMentors';
import TesteViews from './views/TesteView';
import LoginPage from "./views/Login";
import Navbar from './views/Navbar';

import './App.scss';




const App = () => {
  return (
    <BrowserRouter>

   
      <Navigation/>
      <Routes>
        <Route path="/buscar" element={<Mentors/>}/>
        <Route path="/login" element={<Login />}/>
        <Route path="/teste" element={<Teste />}/>
        <Route path="/chat" element={<Mensagem />}/>

      <Navbar/>
      <Routes>
        <Route path="/buscar" element={<FindMentors />}></Route>
        <Route path="/" element={<LoginPage />}></Route>
        <Route path="/teste" element={<TesteViews />}></Route>

      </Routes>

    </BrowserRouter>
  );
}

export default App;
