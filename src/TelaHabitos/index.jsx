import BarraTopo from '../BarraTopo'
import BarraFim from '../BarraFim'
import styled from 'styled-components'
import AdicionarTarefas from './AdicionarTarefas'

import { Contexto } from '../Contexto'
import { useContext, useEffect, useState } from 'react'
import axios from 'axios'


export default function TelaHabitos(props) {

    const {dados, setDados} = useContext(Contexto)
    const [listaHabitos, setListaHabitos] = useState([])
    const URL = 'https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits'
    const [controladorDeAdicaoDeHabitos, setControladorDeAdicaoDeHabitos] = useState(0)
    const [inputsAdicionarTarefa, setInputsAdicionarTarefa] = useState({})    



    function adicionarHabito(){
        setInputsAdicionarTarefa({...inputsAdicionarTarefa, [controladorDeAdicaoDeHabitos]:{texto:'', dias:[]}})
        setControladorDeAdicaoDeHabitos(controladorDeAdicaoDeHabitos+1)
    }

    console.log(inputsAdicionarTarefa)

    let configuracao = {
        headers:{
            Authorization: `Bearer ${dados.token}`
        }
    }



    useEffect(()=>{
        axios.get(URL, configuracao)
        .then((data)=> {console.log('deu certo'); setListaHabitos(data.data)})
        .catch((data)=>console.log("deu erro: ", data.response))
    }, [dados])



    return (
        <>
            <BarraTopo link_foto={'https://midias.correiobraziliense.com.br/_midias/jpg/2016/04/05/675x450/1_cbnfot050420160102-21057794.jpg?20220217210708?20220217210708'} />

            <Conteudo>
                <div className="container-titulo">
                    <h1>Meus Hábitos</h1>
                    <ion-icon name="add-outline" onClick={adicionarHabito}></ion-icon>
                </div>

                <AdicionarTarefas inputs={inputsAdicionarTarefa} setInputs={setInputsAdicionarTarefa}/>


                {listaHabitos.length===0?
                <p>Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!</p>:
                <></>
                }
            </Conteudo>

            <BarraFim value={30}></BarraFim>
        </>
    )
}

const Conteudo = styled.main`
    padding: 98px 17px 70px 17px;
    .container-titulo{
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    ion-icon{
        background-color: #52B6FF;
        color: white;
        font-size: 23px;
        width: 40px;
        height: 35px;
        border-radius: 5px;
    }
`