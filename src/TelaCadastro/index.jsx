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

    const [carregando, setCarregando] = useState(false)


    return (
        <TelaInicial >
            <LogoPaginas/>
            <form onSubmit={(event) => {
                event.preventDefault()
                setCarregando(true)
                axios.post(URL, {
                    email: valoresInput.email,
                    name: valoresInput.nome,
                    image: valoresInput['link foto'],
                    password: valoresInput.senha
                })
                    .then((data) => {
                        navigate('/')
                        setCarregando(false)
                    })
                    .catch((data) => {
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
                    {carregando ? (
                        <ThreeDots
                            color="#ffffff"
                        />) : <>Entrar</>}
                </button>
            </form>

            <Link to="/">Já tem uma conta? Faça login</Link>
        </TelaInicial>
    )
}
