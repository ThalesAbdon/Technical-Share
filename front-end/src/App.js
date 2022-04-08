import * as React from "react";
import { BrowserRouter, Routes,Route} from "react-router-dom";
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
        <Route path="/buscar" element={<Mentors/>}/>
        <Route path="/login" element={<Login />}/>
        <Route path="/teste" element={<Teste />}/>
        <Route path="/chat" element={<Mensagem />}/>
      </Routes>

    </BrowserRouter>
  );
  
}

export default App;