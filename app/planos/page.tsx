import React from 'react'

export default function Planos() {

    const plans = [
        {
            nome: "nome",
            data: "2025/2026",
            descrição: "descrição",
            imagem: "https://picsum.photos/1920/1080"
        },
        {
            nome: "nome",
            data: "2025/2026",
            descrição: "descrição",
            imagem: "https://picsum.photos/1920/1080"
        },
        {
            nome: "nome",
            data: "2025/2026",
            descrição: "descrição",
            imagem: "https://picsum.photos/1920/1080"
        },
        {
            nome: "nome",
            data: "2025/2026",
            descrição: "descrição",
            imagem: "https://picsum.photos/1920/1080"
        },
        {
            nome: "nome",
            data: "2025/2026",
            descrição: "descrição",
            imagem: "https://picsum.photos/1920/1080"
        },
        {
            nome: "nome",
            data: "2025/2026",
            descrição: "descrição",
            imagem: "https://picsum.photos/1920/1080"
        },
    ]


    return (
        <div style={{
            display: "flex",
            flexDirection: "row",
            gap: "1em",
            justifyContent: "center",
            margin: "10em",
            flexWrap: "wrap",
        }}>
            {plans.map((plan, index) => {
                return (
                    <div key={index}
                         style={{
                             height: "30em",
                             width: "20em",
                             backgroundColor: "green",
                             display: "flex",
                             flexDirection: "column",
                         }}>
                        <div>{plan.nome}</div>
                        <div>{plan.data}</div>
                        <img src={plan.imagem} style={{
                            objectFit: "cover",
                            height: "30%", width: "100%", marginRight: "5%", marginLeft: "5%"
                        }}/>
                        <div>{plan.descrição}</div>
                    </div>
                )
            })}


        </div>
    )
}