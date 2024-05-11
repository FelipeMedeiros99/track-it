import { useState } from 'react'
import trackit from './../assets/track-it.png'
import { Link } from 'react-router-dom'



export default function TelaLogin(props){

    const [valoresInput, setValoresInput] = useState({email:'', senha:''})
    const chavesInputs = Object.keys(valoresInput)

    return(
        <>
            <div className="container-imagem">
                <img src={trackit} alt="Logo do Track-it" />
            </div>
            
            <form>
                {chavesInputs.map((chave, index)=>(
                    <input 
                        key={index}
                        type="text"
                        value={valoresInput[chave]}
                        onChange={(event)=>{
                            const valor = event.target.value
                            setValoresInput({...valoresInput, [chave] :valor})
                        }} />
                ))}
                
                <button>Entrar</button>
            </form>

            <Link to='/cadastro'> Não tem uma conta? Cadastre-se</Link>

        </>
    )
}