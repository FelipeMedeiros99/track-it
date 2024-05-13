import { useState } from 'react'
import { Link } from 'react-router-dom'

import GerenciadorInput from '../GerenciadorInput'
import LogoPaginas from '../LogoPaginas'


export default function TelaLogin(props){

    const [valoresInput, setValoresInput] = useState({email:'', senha:''})

    return(
        <>
            <LogoPaginas />
            <form onSubmit={(event)=>{
                event.preventDefault()
                console.log(event)
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