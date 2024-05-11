import { useState } from 'react'
import trackit from './../assets/track-it.png'
import { Link } from 'react-router-dom'

import GerenciadorInputs from './../GerenciadorInputs'


export default function TelaLogin(props){

    const [valoresInput, setValoresInput] = useState({email:'', senha:''})

    return(
        <>
            <div className="container-imagem">
                <img src={trackit} alt="Logo do Track-it" />
            </div>
            
            <form>
                <GerenciadorInputs 
                    valoresInput={valoresInput}
                    setValoresInput={setValoresInput}
                />
                
                <button>Entrar</button>
            </form>

            <Link to='/cadastro'> Não tem uma conta? Cadastre-se</Link>

        </>
    )
}