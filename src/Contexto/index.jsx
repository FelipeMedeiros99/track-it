import { createContext } from "react";

const Contexto = createContext()

const ContextoProvider = ({value, children}) =>{
    return(
        <Contexto.Provider value={value}>
            {children}
        </Contexto.Provider>
    )
}

export { ContextoProvider, Contexto }