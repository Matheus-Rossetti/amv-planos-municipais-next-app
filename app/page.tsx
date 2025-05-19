import React from "react";
import { getCityColor } from "@/utils/get-city-color";
import { TextContainer} from "@/components/containers/text-container";
import { ListContainer } from "@/components/containers/list-container";
import { ImageContainer } from "@/components/containers/image-container";
import { PdfContainer } from "@/components/containers/pdf-container";
import {Property} from "csstype";
import BackgroundColor = Property.BackgroundColor;
import {TableContainer} from "@/components/containers/table-container";

export default async function AllContainersPage(){

    const cityColor: BackgroundColor = getCityColor('São João do Itaperiú')

    return (
        <div style={{
            backgroundColor: "#F3EFE8",
            display: "flex",
            alignItems: "center",
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
                {src: 'https://picsum.photos/1080/1440', width: 1080, height: 1440, aspectRatio: "9/16"},
                {src: 'https://picsum.photos/1080/1920', width: 1080, height: 1920, aspectRatio: "9/16"},
            ]} backgroundColor={cityColor}/>
            <TableContainer containerTitle={"Painel de Tabela"} columns={[{columnName: "Nome", items: ["Ana", "João da Silva", "Carla M.", "Leonardo Fernandes Neto"]}, {columnName: "Cargo", items: ["Dev", "Engenheiro Sênior", "QA", "Designer"]}, {columnName: "Localização", items: ["SP", "Belo Horizonte - MG", "Curitiba", "RJ"]}, ]} backgroundColor={cityColor}/>
            <PdfContainer containerTitle={'Painel de Pdf'} pdfList={[{src: '', name: ''}, {src: '', name: ''}]} backgroundColor={cityColor} />
        </div>
    )
}