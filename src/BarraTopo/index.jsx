import styled from 'styled-components'
import trackit from './track-it-text.svg'
import { useContext } from 'react'

import { Contexto } from '../Contexto'


export default function BarraTopo() {

    const {dados} = useContext(Contexto)


    return (
        <Barra>
            <img className='simbolo' src={trackit} alt="track it" />
            <img className='foto-perfil' src={dados.image} alt="foto do usuário" />
        </Barra>
    )
}


const Barra = styled.div`
    position: fixed;
    top: 0;
    width: 100%;
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
