import { useState } from "react"
import { Link } from "react-router-dom"

import GerenciadorInput from "../GerenciadorInput" 
import LogoPaginas from "../LogoPaginas"

export default function TelaCadastro(props){
    const [valoresInput, setValoresInput] = useState({email:'', senha:'', nome:'', 'link foto': ''})
    return(
        <>
            <LogoPaginas />
            <form>
                <GerenciadorInput 
                    valoresInput={valoresInput}
                    setValoresInput={setValoresInput}    
                />
                <button>Cadastrar</button>
            </form>
            <Link to="/">Já tem uma conta? Faça login</Link>
        </>
    )
}
