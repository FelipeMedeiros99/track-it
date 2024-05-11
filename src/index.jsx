import { createRoot } from "react-dom/client";
import { useState } from "react";
import { Audio, BallTriangle, Bars, Blocks, Circles, CirclesWithBar, ColorRing, Comment, DNA, Discuss, FallingLines, FidgetSpinner, Grid, Hearts, Hourglass, InfinitySpin, LineWave, MagnifyingGlass, MutatingDots, Oval, ProgressBar, Puff, Radio, RevolvingDot, Rings, RotatingLines, RotatingSquare, RotatingTriangles, TailSpin, ThreeCircles, ThreeDots, Triangle, Vortex, Watch } from 'react-loader-spinner';

import Pagina1 from "./Pagina1";
import Pagina3 from "./Pagina3";

import './assets/index.css'
import './assets/reset.css'

import { Contexto, ContextoProvide } from "./Contexto/Contexto";

function App() {
    const [contador, setContador] = useState(0)

    // Audio, BallTriangle, Bars, Blocks, Circles, CirclesWithBar, ColorRing, Comment, DNA, Discuss, FallingLines, FidgetSpinner, Grid, Hearts, Hourglass, InfinitySpin, LineWave, MagnifyingGlass, MutatingDots, Oval, ProgressBar, Puff, Radio, RevolvingDot, Rings, RotatingLines, RotatingSquare, RotatingTriangles, TailSpin, ThreeCircles, ThreeDots, Triangle, Vortex, Watch

    return (
        <>

            <Audio
                type="Puff"
                color="#00BFFF"
                height={100}
                width={100}
                timeout={1000}
            />
            
            <Circles></Circles>

        </>
    )
}


const root = createRoot(document.querySelector('.root'))

root.render(<App />)