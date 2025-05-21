'use client'

import React from "react"


export default function InserirPlano( /* receber um objeto Plan pronto ou vazio */ ) {

    async function handleClick() {
        const res = await fetch('/api/plans/create-plan', { method: 'POST' })
        const data = await res.json()
        console.log(data)
    }


    return(
        <div style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100vh",
        }}
        >
        <div style={{
           backgroundColor:"coral",
            color: "white",
            borderRadius: "20px",
            height: "20em",
            width: "30em",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
        }}

             onClick={ handleClick }
        >
            Página de criar plano
        </div>
        </div>
    )
}