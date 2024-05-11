import trackit from './../assets/track-it.png'
import { Link } from 'react-router-dom'


export default function TelaLogin(props){
    return(
        <>
            <div className="container-imagem">
                <img src={trackit} alt="Logo do Track-it" />
            </div>
            
            <form>
                <input type="text" />
                <input type="text" />
                <button>Entrar</button>
            </form>

            <Link to='/cadastro'> Não tem uma conta? Cadastre-se</Link>

        </>
    )
}