//import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SearchMentors from './views/SearchMentors';
import LoginPage from "./views/Login";
import Navbar from './views/Navbar';
import Chat from "./components/chat";
import Agendamentos from "./components/Agendamentos";
import Footer from './components/Footer';
import TesteViews from "./views/TesteView";
import Home from "./views"
import './App.scss';

const App = () => {
  return (
    <BrowserRouter>

      <Navbar/>
      <Routes>
      <Route exact path="/" element={<Home />} />
       {/* <Route path="/" element={<LoginPage />}/> */}
        <Route path="/buscar" element={<SearchMentors/>}/>
        <Route path="/login" element={<LoginPage />}/>
        {/* <Route path="/teste" element={<FindMentors />}/> */}
        <Route path="/chat" element={<Chat/>}/>
        <Route path="/agendamentos" element = {<Agendamentos/>}/>
      </Routes>
      <Footer/>

    </BrowserRouter>
  );
}

export default App;
