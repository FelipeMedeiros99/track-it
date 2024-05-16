import styled from "styled-components"
import BarraFim from "../BarraFim"
import BarraTopo from "../BarraTopo"
import {Main, Titulo} from "../assets/estiloDemaisPaginas"

export default function TelaHistorico(props){
    return(
        <>
        <BarraTopo></BarraTopo>

        <Main>
            <Titulo>
                <h1>Histórico</h1>
            </Titulo>
            <p>Em breve você poderá ver o histórico dos seus hábitos aqui!</p>
        </Main>

        <BarraFim></BarraFim> 
        </>
    )
}


