import { useContext } from "react"

import ContextoProvedor from './context/context'


function Pagina1(){
    
    const {teste, setTeste} = useContext(Contexto)

    return(
        <>
            Pagina 1
        </>
    )
}

export default Pagina1
