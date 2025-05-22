'use client'

import React from 'react'
import plans from "@/assets/planos.json"

export default function Planos() {

    return (
        <div style={{ display: "flex", flexDirection: "column"}}>
            <div style={{
                maxWidth: "100vw",
                height: "17vh",
                backgroundColor: "coral",
            }}/>
        <div style={{
            display: "flex",
            flexDirection: "row",
            gap: "1em",
            justifyContent: "center",
            margin: "10em",
            flexWrap: "wrap",
        }}>

            {/* ------------- PLAN CARD ------------- */}
            {plans.map((plan, index) => {
                return (
                    <div key={index}
                         style={{
                             height: "30em",
                             width: "20em",
                             borderRadius: "15px",
                             backgroundColor: "beige",
                             display: "flex",
                             alignItems: "center",
                             flexDirection: "column",

                             cursor: "pointer",
                         }}
                         // onClick={ } // TODO mandar para a página de plano junto do id do plano
                    >
                        <div style={{
                            fontSize: "x-large",
                            marginTop: "2em",
                        }}>{plan.name}</div>
                        <div>{plan.start_date} / {plan.end_date}</div>
                        <div style={{
                            height: "100%",
                            width: "100%",
                            marginLeft: "1em",
                            marginRight: "1em",
                            marginTop: "2em",
                            marginBottom: "2em",
                            backgroundColor: "tomato"
                        }}/>
                        <div style={{
                        }}>{plan.description}</div>
                    </div>
                )
            })}


        </div>
        </div>
    )
}