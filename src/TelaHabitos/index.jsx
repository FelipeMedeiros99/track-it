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
    const [controladorDeAdicaoDeHabitos, setControladorDeAdicaoDeHabitos] = useState(0)
    const [inputsAdicionarTarefa, setInputsAdicionarTarefa] = useState({})    
    
    
    function salvarListaDeHabitos(){
        const URL = 'https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits'
        const configuracao = {
            headers:{
                Authorization: `Bearer ${dados.token}`
            }
        }
        axios.get(URL, configuracao)
        .then((data)=> {console.log('Lista de hábitos renderizada com sucesso'); 
                        setListaHabitos(data.data);
                        console.log(data.data)
                    })
        .catch((data)=>console.log("Erro ao renderizar lista de hábitos ", data.response))
    }


    function adicionarHabito(){
        setInputsAdicionarTarefa({...inputsAdicionarTarefa, [controladorDeAdicaoDeHabitos]:{texto:'', dias:[]}})
        setControladorDeAdicaoDeHabitos(controladorDeAdicaoDeHabitos+1)
    }


    useEffect(()=>{
        salvarListaDeHabitos()
    }, [])



    return (
        <>
            <BarraTopo link_foto={'https://midias.correiobraziliense.com.br/_midias/jpg/2016/04/05/675x450/1_cbnfot050420160102-21057794.jpg?20220217210708?20220217210708'} />

            <Conteudo>
                <div className="container-titulo">
                    <h1>Meus Hábitos</h1>
                    <ion-icon name="add-outline" onClick={adicionarHabito}></ion-icon>
                </div>

                <AdicionarTarefas 
                    inputs={inputsAdicionarTarefa} 
                    setInputs={setInputsAdicionarTarefa}
                    salvarListaDeHabitos={salvarListaDeHabitos}
                />


                

                {listaHabitos.length===0?
                <p>Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!</p>:
                <>
                {listaHabitos.map((habito)=>{
                    const semana = ['D', 'S', 'T', 'Q', 'Q', 'S', 'S']
                    return(
                    <div className="container-tarefas">
                        <h2>{habito.name}</h2>
                        {semana.map((siglaDoDia, index)=>{
                            const diaEstaSelecionado = habito.days.indexOf(index)!== -1                            
                            return(
                                <button disabled className={diaEstaSelecionado?'selecionado':''}>{siglaDoDia}</button>
                            )
                        })}
                    </div>
                )})}
                </>
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

    .selecionado{
        background-color: red;
    }
`