import BarraTopo from '../BarraTopo'
import BarraFim from '../BarraFim'
import styled from 'styled-components'
import GerenciadorInput from '../GerenciadorInput'

import { Contexto } from '../Contexto'
import { useContext, useEffect, useState } from 'react'
import axios from 'axios'


export default function TelaHabitos(props) {
    const {dados, setDados} = useContext(Contexto)
    const [listaHabitos, setListaHabitos] = useState([])
    const URL = 'https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits'
    const [controladorDeAdicaoDeHabitos, setControladorDeAdicaoDeHabitos] = useState(0)
    const [inputsAdicionarTarefa, setInputsAdicionarTarefa] = useState({})    
    const semana = ['D', 'S', 'T', 'Q', 'Q', 'S', 'S']

    console.log(inputsAdicionarTarefa)

    function adicionarHabito(){
        setInputsAdicionarTarefa({...inputsAdicionarTarefa, [controladorDeAdicaoDeHabitos]:''})
        setControladorDeAdicaoDeHabitos(controladorDeAdicaoDeHabitos+1)
    }


    let configuracao = {
        headers:{
            Authorization: `Bearer ${dados.token}`
        }
    }



    useEffect(()=>{
        axios.get(URL, configuracao)
        .then((data)=> setListaHabitos(data.data))
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

                {Object.keys(inputsAdicionarTarefa).map((contador, index)=>(
                    <form key={index} className="container-adicionar-tarefa">
                        <input type="text" 
                            value={inputsAdicionarTarefa.contador}
                            onChange={(event)=>{
                                let copiaDadosInputs = {...inputsAdicionarTarefa}
                                copiaDadosInputs[contador] = event.target.value
                                setInputsAdicionarTarefa({...copiaDadosInputs})
                            }}
                            required
                        />
                        <div className="botoes-semana">
                            {semana.map((dia, index2)=>(
                                <button type='button' key={index2}>{dia}</button>
                            ))}
                        </div>

                        <div className="botoes-submissao">
                            <button>Cancelar</button>
                            <button>Salvar</button>
                        </div>

                    </form>
                ))}


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