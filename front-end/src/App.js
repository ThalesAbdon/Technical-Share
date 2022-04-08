import * as React from "react";
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
