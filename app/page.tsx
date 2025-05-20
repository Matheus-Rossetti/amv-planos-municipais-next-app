import React from "react";
// TODO alterar para fetchar o plano do db (ou do cache, se tiver)
import plan from "../public/plano-teste.json";
import {getCityColor} from "@/utils/get-city-color";
import {TextContainer} from "@/components/containers/text-container";
import {ListContainer} from "@/components/containers/list-container";
import {ImageContainer} from "@/components/containers/image-container";
import {PdfContainer} from "@/components/containers/pdf-container";
import {Property} from "csstype";
import BackgroundColor = Property.BackgroundColor;
import {TableContainer} from "@/components/containers/table-container";
import {TopBar} from "@/components/topbar";
import {Tab} from "@/components/tab";

export default async function AllContainersPage() {


    const cityColor: BackgroundColor = getCityColor(plan.city)
    // let [ tabIndex, changeTabIndex ] = useState<number>(0)

    return (
        <div style={{
            backgroundColor: "#F3EFE8",
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
        }}>
            <TopBar planName={plan.name} color={cityColor}/>
            <div style={{display: "flex", flexDirection: "row", alignItems: "flex-start", minWidth: "100%"}}>
                <Tab tabName={plan.startingTab.tabName} color={cityColor}/>
                <Tab tabName={plan.preparationsTab.tabName} color={cityColor}/>
                <Tab tabName={plan.lawTab.tabName} color={cityColor}/>
                <Tab tabName={plan.libraryTab.tabName} color={cityColor}/>
                {plan.extraTabs.map((tab, index) => {
                        return (<Tab key={index} tabName={tab.tabName} color={cityColor}/>)
                    }
                )
                }
            </div>
            <div style={{
                marginTop: "3vh"
            }}>
                {plan.startingTab.containers.map((container, index) => {
                        // TS may complain about the types here, but code will only enter the case if it has the containerType, so don't worry.
                        switch (container.containerType) {
                            case "text":
                                return (<TextContainer containerTitle={container.containerTitle} text={container.text}
                                                       backgroundColor={cityColor} key={index}/>)
                            case "image":
                                return (
                                    <ImageContainer containerTitle={container.containerTitle} images={container.images}
                                                    backgroundColor={cityColor} key={index}/>)
                            case "list":
                                return (<ListContainer containerTitle={container.containerTitle} lists={container.lists}
                                                       backgroundColor={cityColor} key={index}/>)
                        }
                    })}
            </div>
        </div>

    )
}


//
// <div style={{
//     backgroundColor: "#F3EFE8",
//     display: "flex",
//     alignItems: "center",
//     flexDirection: "column",
// }}>
//     <div style={{
//         margin: 50,
//         height: "1em",
//         width: "50vw",
//         backgroundColor: cityColor,
//         position: "fixed",
//         top: 0,
//     }}/>
//     <TextContainer containerTitle={'Painel de Texto'} text={'hgeohweohoigewweijhgigewhogwenojgjwegopjg ewo gwe ioggwe '} backgroundColor={cityColor}></TextContainer>
//     <ListContainer containerTitle={'Painel de Lista'} lists={[{"listTitle": "Primeira lista", "items": ["Item 1nnnnnnnnnn Item 1nnnnnnnnnnItem 1nnnnnnnnnnItem 1nnnnnnnnnnItem 1nnnnnnnnnnItem 1nnnnnnnnnnItem 1nnnnnnnnnnItem 1nnnnnnnnnnItem 1nnnnnnnnnnItem 1nnnnnnnnnnItem 1nnnnnnnnnnItem 1nnnnnnnnnnItem 1nnnnnnnnnnItem 1nnnnnnnnnnItem 1nnnnnnnnnnItem 1nnnnnnnnnnItem 1nnnnnnnnnnItem 1nnnnnnnnnnItem 1nnnnnnnnnnItem 1nnnnnnnnnnItem 1nnnnnnnnnnItem 1nnnnnnnnnnItem 1nnnnnnnnnnItem 1nnnnnnnnnnItem 1nnnnnnnnnn", "Item 2", "Item 3"]}, {"listTitle": "Segunda lista", "items": ["Item 1", "Item 2", "Item 3"]}]} backgroundColor={cityColor}/>
//     <ImageContainer containerTitle={'Painel de Imagem'} images={[
//         {src: 'https://picsum.photos/1080/1440', width: 1080, height: 1440, aspectRatio: "9/16"},
//         {src: 'https://picsum.photos/1080/1920', width: 1080, height: 1920, aspectRatio: "9/16"},
//     ]} backgroundColor={cityColor}/>
//     <TableContainer containerTitle={"Painel de Tabela"} columns={[{columnName: "Nome", items: ["Ana", "João da Silva", "Carla M.", "Leonardo Fernandes Neto"]}, {columnName: "Cargo", items: ["Dev", "Engenheiro Sênior", "QA", "Designer"]}, {columnName: "Localização", items: ["SP", "Belo Horizonte - MG", "Curitiba", "RJ"]}, ]} backgroundColor={cityColor}/>
//     <PdfContainer containerTitle={'Painel de Pdf'} pdfList={[{src: '', name: ''}, {src: '', name: ''}]} backgroundColor={cityColor} />
// </div>