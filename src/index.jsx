import { createRoot } from "react-dom/client";

import Pagina1 from "./Pagina1";
import Pagina2 from './Pagina2';
import Pagina3 from './Pagina3';

import './assets/index.css'
import './assets/reset.css'


function App(){
    return( 
        <>
            <Pagina1></Pagina1>
            <Pagina2></Pagina2>
            <Pagina3></Pagina3>

        </>
    )
}


const root = createRoot(document.querySelector('.root'))

root.render(<App />)