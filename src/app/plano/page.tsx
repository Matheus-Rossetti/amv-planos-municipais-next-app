import React from "react";
import { Property } from "csstype";
import BackgroundColor = Property.BackgroundColor;
import {cityColor} from "@/utils/city-color";
import {TopBar} from "@/app/plano/topbar";
import {Tab} from "@/app/plano/tab";
import {ContentContainer} from "@/app/plano/content-container";

export default async function PlanPage() {

    const res = await fetch(`http://localhost:3000/api/plans/get-plan?id=1`);
    const plan = await res.json();


    const color: BackgroundColor = cityColor("São João do Itaperiú");

    return (
        <div style={{
            backgroundColor: "#F3EFE8",
            minHeight: "100vh"
        }}>
            <TopBar planName={plan.nome} color={color} />
             {/*TODO criar abas dinamicas, enviar titulo e index*/}
            <div style={{
                paddingLeft: "0.5vw",
                paddingRight: "0.5vw",
                display: "flex",
                flexDirection: "row"
            }}>
                {plan.extras.abas.map((aba: { nome: string }, index: number) => (
                    <div key={ index }>
                        <Tab tabName={ aba.nome } color={ color }/>
                    </div>
                ))}

            </div>
            {/*TODO criar os containers de conteúdo dinamicamente com base no json, apenas alguns serão obrigatórios*/}
            <div style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                paddingLeft: "12.5vw",
                paddingRight: "12.5vw",
                paddingTop: "10vh",
                paddingBottom: "10vh"
            }}>
                <ContentContainer conteudo={plan.extras.abas[0].campos[0].conteudo} titulo={plan.extras.abas[0].campos[0].titulo}/>
            </div>
        </div>
    );
}