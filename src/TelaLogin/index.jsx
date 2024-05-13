import { useContext, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'

import GerenciadorInput from '../GerenciadorInput'
import LogoPaginas from '../LogoPaginas'
import { Contexto } from '../Contexto'


export default function TelaLogin(props){

    const [valoresInput, setValoresInput] = useState({email:'', senha:''})
    const URL = "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/login"
    const { setDados } = useContext(Contexto)
    const navigate = useNavigate()

    return(
        <>
            <LogoPaginas />
            <form onSubmit={(event)=>{
                event.preventDefault()
                axios.post(URL, {email:valoresInput.email, password:valoresInput.senha})
                .then((data)=> {
                    setDados(data.data)
                    navigate('/habitos')
                })
                .catch((data)=> console.log(data.response))
            }}>
                <GerenciadorInput
                    valoresInput={valoresInput}
                    setValoresInput={setValoresInput}
                />
                
                <button type="submit">Entrar</button>
            </form>

            <Link to='/cadastro'> Não tem uma conta? Cadastre-se</Link>

        </>
    )
}