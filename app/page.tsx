import React from 'react'



// TODO essa página é provisória, não estará na versão final

export default function ChoicePage() {
    return (
        <div style={{
            height: "100vh",
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
        }}>

            <a  href={"/inserir-plano"}
                style={{
                width: "100%",
                backgroundColor: "coral",
                margin: "5em",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
            }}>
                Inserir plano
            </a>
            <a  href={"/planos"}
                style={{
                width: "100%",
                backgroundColor: "coral",
                margin: "5em",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
            }}>
                Visualizar plano
            </a>

        </div>
    )
}