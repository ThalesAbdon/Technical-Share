import React from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Cadastro from "./pages/cadastro"
import Home from "./pages/home/"
import Oferecendo from "./pages/oferecendo"

function App() {
    return (
        <BrowserRouter>
            <>
                <Routes>
                    <Route exact path="/" element={<Home />} />
                    <Route exact path="/cadastro" element={<Cadastro />} />
                    <Route exact path="/oferecendo" element={<Oferecendo />} />
                </Routes>

            </>
        </BrowserRouter>
    )
}
export default App
