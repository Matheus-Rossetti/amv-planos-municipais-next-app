import React from "react";
import { getCityColor } from "@/utils/get-city-color";
import { TextContainer} from "@/components/containers/text-container";
import {ListComponent} from "@/components/containers/list-component";

export default async function AllContainersPage(){

    const cityColor = getCityColor('Jaraguá do Sul')

    return (
        <div style={{
            backgroundColor: "#F3EFE8",
            minHeight: "100vh",
            display: "flex",
            alignItems: "center",
            // justifyContent: "center",
            flexDirection: "column",
        }}>
            <div style={{
                margin: 50,
                height: "1em",
                width: "50vw",
                backgroundColor: cityColor,
            }}/>
            <TextContainer containerTitle={'Texto'} text={'Um plano municipal é um documento estratégico elaborado pela prefeitura que define as metas, ações e investimentos para o desenvolvimento de uma cidade em áreas como saúde, educação, mobilidade, meio ambiente e infraestrutura. Ele orienta a gestão pública ao longo de um período (geralmente quatro anos), garantindo que as políticas públicas estejam alinhadas com as necessidades da população e com a legislação vigente.'} backgroundColor={cityColor}></TextContainer>
            <div style={{padding: "1em"}}/>
            <ListComponent containerTitle={'Lista'} lists={[{"listTitle": "Primeira lista", "items": ["Item 1", "Item 2", "Item 3"]}, {"listTitle": "Primeira lista", "items": ["Item 1", "Item 2", "Item 3"]}]} backgroundColor={cityColor}/>
        </div>


    )
}