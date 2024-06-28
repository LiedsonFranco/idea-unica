import { SpeedInsights } from "@vercel/speed-insights/next"
import { useState } from 'react'

export default function Home(){
    return (
        <div>
            <Analytics/>
            <h1>Home</h1>
            <a href="/sobre">Sobre</a>
        </div>
    )
}