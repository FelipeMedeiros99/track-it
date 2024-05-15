import { useContext, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import {ThreeDots} from 'react-loader-spinner'

import GerenciadorInput from '../GerenciadorInput'
import LogoPaginas from '../LogoPaginas'
import { Contexto } from '../Contexto'
import styled from 'styled-components'


export default function TelaLogin(props){

    const [valoresInput, setValoresInput] = useState({email:'', senha:''})
    const URL = "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/login"
    const { setDados } = useContext(Contexto)
    const navigate = useNavigate()
    const [carregando, setCarregando] = useState(false)


    return(
        <>
            <LogoPaginas />
            

            <Form onSubmit={(event)=>{
                event.preventDefault()
                setCarregando(true)
                axios.post(URL, {email:valoresInput.email, password:valoresInput.senha})
                .then((data)=> {
                    const dados = data.data
                    setDados(dados)
                    localStorage.setItem('userTrackIt', JSON.stringify(dados))
                    navigate('/hoje')
                    setCarregando(false)
                })
                .catch((data)=> {
                    console.log(data.response)
                    setCarregando(false)
                })
            }}>
                <GerenciadorInput
                    valoresInput={valoresInput}
                    setValoresInput={setValoresInput}
                    carregando={carregando}
                />
                
                <button disabled={carregando} type="submit">
                    
                    {carregando?(
                    <ThreeDots 
                        color="#ffffff"
                    />):<>Entrar</>}
                </button>
            </Form>

            <Link to='/cadastro'> Não tem uma conta? Cadastre-se</Link>

        </>
    )
}

const Form = styled.form`

`