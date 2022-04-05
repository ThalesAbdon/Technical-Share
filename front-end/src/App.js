import * as React from "react";
import * as ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Mentors from './views/findMentors';
import './App.scss';

import Navigation from './components/Navigation';

const App = () => {
  return (
    <BrowserRouter>
      <Navigation/>
      <Routes>
        <Route path="/buscar" element={<Mentors />}></Route>
      </Routes>
    </BrowserRouter>
  );
  
}

export default App;