import styled from "styled-components"
import BarraFim from "../BarraFim"
import BarraTopo from "../BarraTopo"


export default function TelaHistorico(props){
    return(
        <>
        <BarraTopo></BarraTopo>

        <Conteudo>
            <h1>Histórico</h1>
            <p>Em breve você poderá ver o histórico dos seus hábitos aqui!</p>
        </Conteudo>

        <BarraFim value={10}></BarraFim> 
        </>
    )
}

const Conteudo = styled.main`
    padding: 98px 17px 70px 17px;

`

