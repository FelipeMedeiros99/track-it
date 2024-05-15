
import styled from "styled-components"
import axios from "axios"
import { useContext, useEffect, useState } from "react"

import BarraFim from "../BarraFim"
import BarraTopo from "../BarraTopo"
import { Contexto } from "../Contexto"



export default function TelaHoje(){
    const {dados, atualizarDados} = useContext(Contexto)
    const [tarefasDeHoje, setTarefasDeHoje] = useState([])
    
    const diasDaSemana = ['Domingo', 'Segunda-feira', 'Terça-feira', 'Quarta-feira', 'Quinta-feira', 'Sexta-feira', 'Sábado'];
    const dataCompleta = new Date()
    const diaDaSemana = diasDaSemana[dataCompleta.getDay()]
    const diaDoMes = dataCompleta.getDate()
    const mes = dataCompleta.getMonth()+1
    const ano = dataCompleta.getFullYear()

    useEffect(()=>{
        atualizarDados()
    },[])

    useEffect(()=>{
        const URL = 'https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/today'
        const config = {
            headers:{
                Authorization: `Bearer ${dados.token}`
            }
        }

        if(dados.token!==undefined){   
            axios.get(URL, config)
            .then((data)=>console.log(data.data))
            .catch((data)=>console.log(data.response))
        }

    }, [dados])

    return(
        <>
        <BarraTopo></BarraTopo>

        <Conteudo>
            <h1>{diaDaSemana}, {diaDoMes>9?diaDoMes:`0${diaDoMes}`}/{mes>9?mes:`0${mes}`}/{ano}</h1>
            <p>Nenhum hábito concluído ainda</p>
        </Conteudo>

        <BarraFim value={10}></BarraFim> 
        </>
    )
}

const Conteudo = styled.main`
    padding: 98px 17px 70px 17px;
    
`

