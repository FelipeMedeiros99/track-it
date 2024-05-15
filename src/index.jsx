import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom"

import './assets/reset.css'
import './assets/index.css'

import TelaLogin from './TelaLogin'
import TelaCadastro from './TelaCadastro'
import TelaHabitos from "./TelaHabitos";
import TelaHoje from "./TelaHoje";
import TelaHistorico from "./TelaHistorico";
import { useEffect, useState } from "react";
import { ContextoProvider } from "./Contexto"

function App() {

    function atualizarDados(){
        if(localStorage.userTrackIt!==undefined && dados.length=== undefined){
            const dadosUserLocalStorage = JSON.parse(localStorage.userTrackIt)
            setDados(dadosUserLocalStorage)
        }
    }

    const [dados, setDados] = useState({})
    const [tarefasConcluidas, setTarefasConcluidas] = useState(0)

    useEffect(()=>{
        atualizarDados()
    }, [])
    
    return (
        <BrowserRouter>
            <ContextoProvider value={{ dados, setDados, atualizarDados, tarefasConcluidas, setTarefasConcluidas }}>
                <Routes>
                    <Route path="/" element={<TelaLogin />} />
                    <Route path="/cadastro" element={<TelaCadastro />} />
                    <Route path="/habitos" element={<TelaHabitos />} />
                    <Route path="/hoje" element={<TelaHoje />} />
                    <Route path="/historico" element={<TelaHistorico />} />
                </Routes>
            </ContextoProvider>
        </BrowserRouter>
    )
}


createRoot(document.querySelector('.root')).render(<App />)
