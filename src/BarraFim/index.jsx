import { CircularProgressbarWithChildren } from "react-circular-progressbar"
import styled from "styled-components"
import { Link } from "react-router-dom"
import { useContext } from "react"

import { Contexto } from "../Contexto"


export default function BarraFim() {

    const {tarefasConcluidas} = useContext(Contexto)


    return (
        
        


        <Barra>
            <Link className="endereco" to="/habitos">Habitos</Link>

            <Link to="/hoje">
            <div className="container-progressbar">
                <CircularProgressbarWithChildren
                    value={tarefasConcluidas}
                    />
                <p className="legenda">Hoje</p>
            </div>
            </Link>

            <Link className="endereco" to="/historico">Historico</Link>

        </Barra>
    )
}


const Barra = styled.div`
    position: fixed;
    bottom: 0;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 70px;
    padding: 0 36px 0 36px;
    background-color: white;
    .container-progressbar{
        position: relative;
        height: 91px;
        width: 91px;
        background-color: #52B6FF;
        border-radius: 100%;
        margin-bottom: 40px;
    }

    .legenda{
        display: flex;
        align-items: center;
        justify-content: center;
        position: absolute;
        top:0;
        height: 100%;
        width: 100%;
        color: white;
    }



    .CircularProgressbar-path{
        stroke: white;
    }
    .CircularProgressbar-trail{
        stroke: #52B6FF;
    }

    .CircularProgressbar-text{
        fill: white;
    }

    .CircularProgressbar-background{
        fill: #52B6FF;
    }


    .endereco{
        display: flex;
        align-items: center;
        justify-content: center;
        color: #52B6FF;
        text-decoration: none;
        font-size: 18px;
        width: 100%;
        height:100%
    }

`
