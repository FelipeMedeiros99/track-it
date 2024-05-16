import { useContext, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import {ThreeDots} from 'react-loader-spinner'

import GerenciadorInput from '../GerenciadorInput'
import LogoPaginas from '../LogoPaginas'
import { Contexto } from '../Contexto'
import TelaInicial from '../assets/estiloLogin'

export default function TelaLogin(props){

    const [valoresInput, setValoresInput] = useState({email:'', senha:''})
    const URL = "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/login"
    const { setDados } = useContext(Contexto)
    const navigate = useNavigate()
    const [carregando, setCarregando] = useState(false)
    const [naoEncontrado, setNaoEncontrado] = useState(false)

    return(
        <TelaInicial>
            <LogoPaginas />

            <form onSubmit={(event)=>{
                event.preventDefault()
                setNaoEncontrado(false)
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
                    setCarregando(false)
                    setNaoEncontrado(true)
                })
            }}>
                <GerenciadorInput
                    valoresInput={valoresInput}
                    setValoresInput={setValoresInput}
                    carregando={carregando}
                />

                {naoEncontrado?<p className='nao-encontrado'>Usuário ou senha incorretos...</p>:<></>}
                
                <button disabled={carregando} type="submit">
                    
                    {carregando?(
                    <ThreeDots 
                        color="#ffffff"
                        width={51}
                    />):<>Entrar</>}
                </button>

            </form>

            <Link className='link' to='/cadastro'> Não tem uma conta? Cadastre-se</Link>

        </TelaInicial>
    )
}

