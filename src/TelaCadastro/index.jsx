import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { ThreeDots } from "react-loader-spinner"
import axios from "axios"

import GerenciadorInput from "../GerenciadorInput"
import LogoPaginas from "../LogoPaginas"
import TelaInicial from "../assets/estiloLogin"

export default function TelaCadastro(props) {
    const [valoresInput, setValoresInput] = useState({ email: '', senha: '', nome: '', 'link foto': '' })
    const URL = 'https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/sign-up'
    const navigate = useNavigate()
    const [usuarioExiste, setUsuarioExiste] = useState(false)
    const [carregando, setCarregando] = useState(false)


    return (
        <TelaInicial >
            <LogoPaginas/>
            <form onSubmit={(event) => {
                event.preventDefault()
                setUsuarioExiste(false)
                setCarregando(true)
                let objeto = {}
                
                if (valoresInput['link foto'].length >0){
                    objeto = {
                        email: valoresInput.email,
                        name: valoresInput.nome,
                        image: valoresInput['link foto'],
                        password: valoresInput.senha
                    }  
                }else{
                    objeto = {
                        email: valoresInput.email,
                        name: valoresInput.nome,
                        image:'https://chatobjj.com.br/wp-content/uploads/2023/05/sem-imagem-avatar.png',
                        password: valoresInput.senha
                    } 
                }

                axios.post(URL, objeto)
                    .then((data) => {
                        navigate('/')
                        setCarregando(false)
                    })
                    .catch((data) => {
                        console.log(data.response)
                        if(data.response.status===409){
                            setUsuarioExiste(true)
                        }
                        setCarregando(false)
                    })


            }}>

                <GerenciadorInput
                    valoresInput={valoresInput}
                    setValoresInput={setValoresInput}
                    carregando={carregando}
                />
                {usuarioExiste?<p className='ja-cadastrado'>Este usuário já está cadastrado</p>:<></>}
                <button disabled={carregando} type="submit">
                    {carregando ? (
                        <ThreeDots
                            color="#ffffff"
                            width={51}
                        />) : <>Entrar</>}
                </button>
            </form>

            <Link className="link" to="/">Já tem uma conta? Faça login</Link>
        </TelaInicial>
    )
}
