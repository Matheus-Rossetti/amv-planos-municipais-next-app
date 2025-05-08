import React from "react";
import { getCityColor } from "@/utils/get-city-color";
import { TextContainer} from "@/components/containers/text-container";
import { ListContainer } from "@/components/containers/list-container";
import {ImageContainer} from "@/components/containers/image-container";

export default async function AllContainersPage(){

    const cityColor = getCityColor('São João do Itaperiú')

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
            <TextContainer containerTitle={'Texto'} text={'hgeohweohoigewweijhgigewhogwenojgjwegopjg ewo gwe ioggwe '} backgroundColor={cityColor}></TextContainer>
            <ListContainer containerTitle={'Lista'} lists={[{"listTitle": "Primeira lista", "items": ["Item 1", "Item 2", "Item 3"]}, {"listTitle": "Segunda lista", "items": ["Item 1", "Item 2", "Item 3"]}]} backgroundColor={cityColor}/>
            <ImageContainer containerTitle={'Imagem'} images={['https://picsum.photos/1080/1920', 'https://picsum.photos/1920/1080']} backgroundColor={cityColor}/>
        </div>


    )
}