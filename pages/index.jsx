import { SpeedInsights } from "@vercel/speed-insights/next"
import { useState } from 'react'

export default function Home(){
    return (
        <div>
            <h1>Home</h1>
            <Contador />
        </div>
    )
}

function Contador(){
    const [contador, setContador] = useState(1)
    function adicionarContador(){
        setContador(contador + 1)
    }
    return (
        <div>
            <div>{contador}</div>
            <button onClick={adicionarContador} >Adicionar</button>
        </div>
    )
}