import { Children, createContext, useState } from "react";

const Contexto = createContext()

const [teste, setTeste] = useState(0)

const ContextoProvedor = () => {
    <Contexto.Provider value={{teste, setTeste}} >
    </Contexto.Provider>
}

export default ContextoProvedor