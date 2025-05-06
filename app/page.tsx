import React from "react";
import { cityColor } from "@/utils/city-color";
import { TextContainer} from "@/components/containers/text-container";

export default async function AllContainersPage(){

    const color = cityColor('Jaraguá do Sul')

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
                height: "2vh",
                width: "50vw",
                backgroundColor: color,
            }}></div>
            <TextContainer containerTitle={'Descrição'} text={'Texto'} backgroundColor={color}></TextContainer>
        </div>


    )
}