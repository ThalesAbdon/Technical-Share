//import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import FindMentors from './views/SearchMentors';
import LoginPage from "./views/Login";
import Navbar from './views/Navbar';
import Chat from "./components/chat";
import Agendamentos from "./components/Agendamentos";
import './App.scss';

const App = () => {
  return (
    <BrowserRouter>

      <Navbar/>
      <Routes>
       {/* <Route path="/" element={<LoginPage />}/> */}
        <Route path="/buscar" element={<FindMentors/>}/>
        <Route path="/login" element={<LoginPage />}/>
        {/* <Route path="/teste" element={<Testando />}/> */}
        <Route path="/chat" element={<Chat/>}/>
        <Route path="/agendamentos" element = {<Agendamentos/>}/>
      </Routes>

    </BrowserRouter>
  );
}

export default App;
