import { Children, createContext, useState } from "react";

const Contexto = createContext()


const ContextoProvide = ({children, value}) => {
    return(
        <Contexto.Provider value={value} >
            {children}
        </Contexto.Provider>
    )
}


export { Contexto, ContextoProvide }


