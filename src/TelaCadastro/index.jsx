import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import axios from "axios"

import GerenciadorInput from "../GerenciadorInput" 
import LogoPaginas from "../LogoPaginas"

export default function TelaCadastro(props){
    const [valoresInput, setValoresInput] = useState({email:'', senha:'', nome:'', 'link foto': ''})
    const URL = 'https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/sign-up'
    const navigate = useNavigate()

    return(
        <>
            <LogoPaginas />
            <form onSubmit={(event)=>{
                event.preventDefault()
                axios.post(URL, {
                    email: valoresInput.email,
                    name: valoresInput.nome,
                    image: valoresInput['link foto'],
                    password: valoresInput.senha
                })
                .then((data)=>navigate('/'))
                .catch((data) => console.log(data.response))

               
            }}>

                <GerenciadorInput 
                    valoresInput={valoresInput}
                    setValoresInput={setValoresInput}    
                />
                <button type="submit">Cadastrar</button>
            </form>
            
            <Link to="/">Já tem uma conta? Faça login</Link>
        </>
    )
}
