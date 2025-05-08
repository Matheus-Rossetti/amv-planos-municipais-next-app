import React from "react";
import { getCityColor } from "@/utils/get-city-color";
import { TextContainer} from "@/components/containers/text-container";
import { ListContainer } from "@/components/containers/list-container";

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
            <TextContainer containerTitle={'Texto'} text={''} backgroundColor={cityColor}></TextContainer>
            <ListContainer containerTitle={'Lista'} lists={[{"listTitle": "Primeira lista", "items": ["Item 1", "Item 2", "Item 3"]}, {"listTitle": "Segunda lista", "items": ["Item 1", "Item 2", "Item 3"]}]} backgroundColor={cityColor}/>
        </div>


    )
}