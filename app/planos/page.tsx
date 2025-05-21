import React from 'react'

export default function Planos(){

const plans = [{nome: "nome", data: "2025/2026",  descrição: "descrição", imagem: "https://picsum.photos/1920/1080"}, {nome: "nome", descrição: "descrição", imagem: "https://picsum.photos/1920/1080"}, {nome: "nome", descrição: "descrição", imagem: "https://picsum.photos/1920/1080"}, {nome: "nome", descrição: "descrição", imagem: "https://picsum.photos/1920/1080"},]


    return (
        <div style={{
            display: "flex",
            flexDirection: "row"
        }}>
            {plans.map((plan, index) => {
                return(
                    <div key={index}
                         style={{
                             height: "400px",
                             width: "200px",
                             backgroundColor: "green",
                             display: "flex",
                             flexDirection: "column",
                         }}>
                        <div>{plan.nome}</div>
                        <div>{plan.data}</div>
                        <div><img src={plan.imagem}/></div>
                        <div>{plan.descrição}</div>
                    </div>
                )
            })}


        </div>
    )
}