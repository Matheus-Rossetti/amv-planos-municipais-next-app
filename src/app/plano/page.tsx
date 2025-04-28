import React from "react";
import { Property } from "csstype";
import BackgroundColor = Property.BackgroundColor;
import { cityColor } from "@/utils/city-color";
import { TopBar } from "@/app/plano/topbar";
import { Tab } from "@/app/plano/tab";
import { TextContainer } from "./text-container";
import { ImageContainer } from "@/app/plano/image-container";
import { TableContainer } from "@/app/plano/table-container";

export default async function PlanPage() {

    const res = await fetch(`http://localhost:3000/api/plans/get-plan?id=1`);
    const plan = await res.json();


    const color: BackgroundColor = cityColor(plan.municipio);

    return (
        <div style={{
            backgroundColor: "#F3EFE8",
            minHeight: "100vh"
        }}>
            {/*TODO fazer a TopBar e as tabs ficarem no topo o tempo todo, talvez diminuir a expessura*/}
            <TopBar planName={plan.nome} color={color} />
            <div style={{
                paddingLeft: "0.5vw",
                paddingRight: "0.5vw",
                display: "flex",
                flexDirection: "row",
                justifyContent: "center"
            }}>
                {/* Transforma o plan.extras.abas em um map { objeto - index }*/}
                {plan.extras.abas.map((aba: { nome: string }, index: number) => (
                    <div key={ index }>
                        <Tab tabName={ aba.nome } color={ color }/>
                    </div>
                ))}

            </div>
            <div style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                paddingLeft: "12.5vw",
                paddingRight: "12.5vw",
                paddingTop: "10vh",
                paddingBottom: "10vh"
            }}>
                {plan.extras.abas[0].campos.map((campo: {
                    tipo: string,
                    titulo: string,
                    conteudo: string,
                    url: string,
                    legenda: string,
                    linhas: Array<string>,
                    colunas: Array<string>,
                }, index: number) =>{
                            switch(campo.tipo){
                                case 'texto':
                                    return <div key={index}> <TextContainer titulo={campo.titulo} conteudo={campo.conteudo}/></div>
                                case 'imagem':
                                    return <div key={index}>  <ImageContainer/> </div>
                                case 'tabela':
                                    return <div key={index}> <TableContainer/> </div>
                            }
                        })}

            </div>
        </div>
    );
}