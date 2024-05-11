import styled from 'styled-components'
import trackit from './track-it-text.svg'

export default function BarraTopo({ link_foto }) {
    return (
        <Barra>
            <img className='simbolo' src={trackit} alt="track it" />
            <img className='foto-perfil' src={link_foto} alt="foto do usuário" />
        </Barra>
    )
}


const Barra = styled.div`
    display: flex;
    align-items: center;
    padding: 10px 18px 10px 18px;
    justify-content: space-between;
    height: 70px;
    background-color: #126BA5;
    
    .simbolo{
        width: 97px;
        height: 49px;
        color: aliceblue;
    }

    .foto-perfil{
        height: 51px;
        width: 51px;
    }

`
