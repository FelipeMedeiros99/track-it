
import styled from "styled-components"
import axios from "axios"
import { useContext, useEffect, useState } from "react"


import BarraFim from "../BarraFim"
import BarraTopo from "../BarraTopo"
import { Contexto } from "../Contexto"
import {Main, Titulo} from "../assets/estiloDemaisPaginas"


export default function TelaHoje() {
    

    function atualizarTarefasDeHoje(){
        console.log('atualizando dados')
        const URL = 'https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/today'
        if (dados.token !== undefined) {
            axios.get(URL, config)
                .then((data) => {
                    setTarefasDeHoje(data.data);
                })
                .catch((data) => console.log(data.response))
        }

    }

    function atualizarTarefasConcluidas(){

        let quantidadeDeTarefas = tarefasDeHoje.length
        let quantidadeDeTarefasConcluidas = 0
        for(let i=0; i<quantidadeDeTarefas; i++){
            if(tarefasDeHoje[i].done){
                quantidadeDeTarefasConcluidas++
            }
        }
        let valorEmPorcentagem = Math.round((quantidadeDeTarefasConcluidas/quantidadeDeTarefas)*100)
        console.log(valorEmPorcentagem)
        setTarefasConcluidas(valorEmPorcentagem)
    }


    function marcarComoConcluido(tarefa, index){
        let copia = tarefasDeHoje

        copia[index].done = !copia[index].done
        
        if(copia[index].done){
            copia[index].currentSequence += 1
            copia[index].highestSequence += 1
            const URL = `https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${tarefa.id}/check`
            axios.post(URL,{}, config)
            .then(()=>atualizarTarefasDeHoje())
            .catch((data)=>console.log(data.response))
        }else{
            
            copia[index].currentSequence -= 1
            copia[index].highestSequence -= 1
            const URL = `https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${tarefa.id}/uncheck`
               axios.post(URL, {}, config)
               .then(()=>atualizarTarefasDeHoje())
               .catch((data)=>console.log(data.response))
        } 

        setTarefasDeHoje([...copia])

    }


    const { dados, atualizarDados, setTarefasConcluidas } = useContext(Contexto)
    const [tarefasDeHoje, setTarefasDeHoje] = useState([])

    const diasDaSemana = ['Domingo', 'Segunda-feira', 'Terça-feira', 'Quarta-feira', 'Quinta-feira', 'Sexta-feira', 'Sábado'];
    const dataCompleta = new Date()
    const diaDaSemana = diasDaSemana[dataCompleta.getDay()]
    const diaDoMes = dataCompleta.getDate()
    const mes = dataCompleta.getMonth() + 1
    const ano = dataCompleta.getFullYear()
    const config = {
        headers: {
            Authorization: `Bearer ${dados.token}`
        }
    }


    useEffect(() => {
        atualizarDados()
    }, [])

    useEffect(() => {
        atualizarTarefasDeHoje()
    }, [dados])

    useEffect(()=>{
        atualizarTarefasConcluidas()
    }, [tarefasDeHoje])

    return (
        <>
            <BarraTopo/>

            <Main>
                <Titulo>
                    <h1>{diaDaSemana}, {diaDoMes > 9 ? diaDoMes : `0${diaDoMes}`}/{mes > 9 ? mes : `0${mes}`}/{ano}</h1>
                </Titulo>

                <p>Nenhum hábito concluído ainda</p>
                {tarefasDeHoje.length > 0 ?
                    (tarefasDeHoje.map((tarefa, index) => (
                        <TarefasDoDia key={index} tarefaconcluida={`${tarefa.done}`}>
                            <div className="container-tarefas">
                                <h2>{tarefa.name}</h2>
                                <p>Sequência atual: <span className="sequencia-atual">{tarefa.currentSequence}</span></p>
                                <p>Seu recorde: <span className="recorde">{tarefa.highestSequence}</span></p>
                            </div>
                            <ion-icon onClick={()=>marcarComoConcluido(tarefa, index)} name="checkmark-outline"></ion-icon>
                        </TarefasDoDia>
                    ))) :
                    <></>
                }
            </Main>

            <BarraFim></BarraFim>
        </>
    )
}

const TarefasDoDia = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;

    ion-icon{
        font-size: 48px;
        background-color: ${props => props.tarefaconcluida==='true'?'#8FC549':'#EBEBEB'};
        border: solid 1px;
        color: white;
    }

`
