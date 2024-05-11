import { createRoot } from "react-dom/client";
import {BrowserRouter, Routes, Route} from "react-router-dom"

import './assets/reset.css'
import './assets/index.css'

import TelaLogin from './TelaLogin'
import TelaCadastro from './TelaCadastro'
import TelaHabitos from "./TelaHabitos";
import TelaHoje from "./TelaHoje";
import TelaHistorico from "./TelaHistorico";

function App(){
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<TelaLogin/>}/>
                <Route path="/cadastro" element={<TelaCadastro />}/>
                <Route path="/habitos" element={<TelaHabitos />} />
                <Route path="/hoje" element={<TelaHoje />} />
                <Route path="/historico" element={<TelaHistorico />}/>                
            </Routes>
        </BrowserRouter>
    )
}


createRoot(document.querySelector('.root')).render(<App />)
