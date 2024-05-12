
import styled from "styled-components"
import BarraFim from "../BarraFim"
import BarraTopo from "../BarraTopo"



export default function TelaHoje(props){

    return(
        <>
        <BarraTopo></BarraTopo>

        <Conteudo>
            <h1>Segunda, 17/05</h1>
            <p>Nenhum hábito concluído ainda</p>
        </Conteudo>

        <BarraFim value={10}></BarraFim> 
        </>
    )
}

const Conteudo = styled.main`
    padding: 70px 0 70px 0;
    
`

