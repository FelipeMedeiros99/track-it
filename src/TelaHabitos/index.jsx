import { useContext, useEffect, useState } from 'react'
import styled from 'styled-components'
import axios from 'axios'

import BarraTopo from '../BarraTopo'
import BarraFim from '../BarraFim'
import AdicionarTarefas from './AdicionarTarefas'
import { Contexto } from '../Contexto'
import ListaHabitos from './ListaHabitos'


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
            
            <Conteudo>
                <ContainerTitulo>
                    <h1>Meus Hábitos</h1>
                    <ion-icon className="add-tarefa" name="add-outline" onClick={adicionarHabito}></ion-icon>
                </ContainerTitulo>

                <AdicionarTarefas 
                    inputs={inputsAdicionarTarefa} 
                    setInputs={setInputsAdicionarTarefa}
                    salvarListaDeHabitos={salvarListaDeHabitos}
                />


                <ListaHabitos 
                    setListaHabitos={setListaHabitos}
                    listaHabitos={listaHabitos}
                />

            </Conteudo>

            <BarraFim></BarraFim>
        </>
    )
}

const Conteudo = styled.main`
    
    padding: 98px 17px 70px 17px;
    
    .selecionado{
        background-color: red;
    }
`

const ContainerTitulo = styled.div`
        
        display: flex;
        align-items: center;
        justify-content: space-between;

    ion-icon{
        background-color: #52B6FF;
        color: white;
        font-size: 23px;
        width: 40px;
        height: 35px;
        border-radius: 5px;
    }
`