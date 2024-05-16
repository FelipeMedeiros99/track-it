import { useContext, useEffect, useState } from 'react'
import styled from 'styled-components'
import axios from 'axios'

import BarraTopo from '../BarraTopo'
import BarraFim from '../BarraFim'
import AdicionarTarefas from './AdicionarTarefas'
import { Contexto } from '../Contexto'
import ListaHabitos from './ListaHabitos'
import {Main, Titulo} from '../assets/estiloDemaisPaginas'

export default function TelaHabitos(props) {
    
    function salvarListaDeHabitos(){
        const URL = 'https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits'
        const configuracao = {
            headers:{
                Authorization: `Bearer ${dados.token}`
            }
        }

        if (dados.token!==undefined){
            axios.get(URL, configuracao)
            .then((data)=>setListaHabitos(data.data))
            .catch((data)=>console.log("Erro ao renderizar lista de hábitos ", data.response))
        }
    }


    function adicionarHabito(){
        setInputsAdicionarTarefa({...inputsAdicionarTarefa, [controladorDeAdicaoDeHabitos]:{texto:'', dias:[]}})
        setControladorDeAdicaoDeHabitos(controladorDeAdicaoDeHabitos+1)
    }


    const {dados, atualizarDados} = useContext(Contexto)
    const [listaHabitos, setListaHabitos] = useState([])
    const [controladorDeAdicaoDeHabitos, setControladorDeAdicaoDeHabitos] = useState(0)
    const [inputsAdicionarTarefa, setInputsAdicionarTarefa] = useState({})        
    

    useEffect(()=>{
        atualizarDados()
    }, [])

    useEffect(()=>{
        salvarListaDeHabitos()
    }, [dados])

    return (
        <>
            <BarraTopo/>
            
            <Main>
                <Titulo className='titulo'>
                    <h1>Meus Hábitos</h1>
                    <button onClick={adicionarHabito} className="container-icone">
                        <ion-icon name="add-outline"></ion-icon>
                    </button>
                </Titulo>

                <AdicionarTarefas 
                    inputs={inputsAdicionarTarefa} 
                    setInputs={setInputsAdicionarTarefa}
                    salvarListaDeHabitos={salvarListaDeHabitos}
                />


                <ListaHabitos
                    setListaHabitos={setListaHabitos}
                    listaHabitos={listaHabitos}
                />

            </Main>

            <BarraFim/>
        </>
    )
}


