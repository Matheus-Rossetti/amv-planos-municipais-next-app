import React from "react";
import { getCityColor } from "@/utils/get-city-color";
import { TextContainer} from "@/components/containers/text-container";
import { ListContainer } from "@/components/containers/list-container";
import { ImageContainer } from "@/components/containers/image-container";
import { PdfContainer } from "@/components/containers/pdf-container";

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
                position: "fixed",
                top: 0,
            }}/>
            <TextContainer containerTitle={'Painel de Texto'} text={'hgeohweohoigewweijhgigewhogwenojgjwegopjg ewo gwe ioggwe '} backgroundColor={cityColor}></TextContainer>
            <ListContainer containerTitle={'Painel de Lista'} lists={[{"listTitle": "Primeira lista", "items": ["Item 1nnnnnnnnnn Item 1nnnnnnnnnnItem 1nnnnnnnnnnItem 1nnnnnnnnnnItem 1nnnnnnnnnnItem 1nnnnnnnnnnItem 1nnnnnnnnnnItem 1nnnnnnnnnnItem 1nnnnnnnnnnItem 1nnnnnnnnnnItem 1nnnnnnnnnnItem 1nnnnnnnnnnItem 1nnnnnnnnnnItem 1nnnnnnnnnnItem 1nnnnnnnnnnItem 1nnnnnnnnnnItem 1nnnnnnnnnnItem 1nnnnnnnnnnItem 1nnnnnnnnnnItem 1nnnnnnnnnnItem 1nnnnnnnnnnItem 1nnnnnnnnnnItem 1nnnnnnnnnnItem 1nnnnnnnnnnItem 1nnnnnnnnnn", "Item 2", "Item 3"]}, {"listTitle": "Segunda lista", "items": ["Item 1", "Item 2", "Item 3"]}]} backgroundColor={cityColor}/>
            <ImageContainer containerTitle={'Painel de Imagem'} images={[
                {src: 'https://picsum.photos/1080/1920', height: 1080, width: 1920, aspectRatio: 0.5},
                {src: 'https://picsum.photos/1920/1080', height: 1920, width: 1080, aspectRatio: 1.7},
                {src: 'https://picsum.photos/1920/1080', height: 1920, width: 1080, aspectRatio: 1.7},
                {src: 'https://picsum.photos/1080/1920', height: 1080, width: 1920, aspectRatio: 0.5},
                {src: 'https://picsum.photos/1080/1920', height: 1080, width: 1920, aspectRatio: 0.5},
                {src: 'https://picsum.photos/1080/1920', height: 1080, width: 1920, aspectRatio: 0.5},
                {src: 'https://picsum.photos/1080/1920', height: 1080, width: 1920, aspectRatio: 0.5},
                {src: 'https://picsum.photos/1080/1920', height: 1080, width: 1920, aspectRatio: 0.5},
                {src: 'https://picsum.photos/1920/1080', height: 1920, width: 1080, aspectRatio: 1.7},
                {src: 'https://picsum.photos/1080/1920', height: 1080, width: 1920, aspectRatio: 0.5},
                {src: 'https://picsum.photos/1920/1080', height: 1920, width: 1080, aspectRatio: 1.7},
                {src: 'https://picsum.photos/1080/1920', height: 1080, width: 1920, aspectRatio: 0.5},
            ]} backgroundColor={cityColor}/>
            <PdfContainer containerTitle={'Painel de Pdf'} pdfList={[{src: '', name: ''}, {src: '', name: ''}]} backgroundColor={cityColor} />
        </div>
    )
}