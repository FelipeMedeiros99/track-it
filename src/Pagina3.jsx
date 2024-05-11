import { useContext } from "react"

import { Contexto } from "./Contexto/Contexto"


function Pagina3(){

    const {contador, setContador} = useContext(Contexto)

    return(
        <>
            <p>{contador}</p>
            <button onClick={()=>setContador(contador+1)}> + </button>
        </>
    )
}


export default Pagina3
