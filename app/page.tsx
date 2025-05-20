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

    const tabs = [
        plan.startingTab,
        plan.preparationsTab,
        plan.lawTab,
        plan.libraryTab,
        ...plan.extraTabs
    ] // Coloca todas as tabs em um array, assim podemos iterar por elas usando um index



    return (
        <div style={{
            backgroundColor: "#F3EFE8",
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
        }}>
            <TopBar planName={plan.name} color={cityColor}/>
            <div style={{display: "flex", flexDirection: "row", alignItems: "flex-start", minWidth: "100%"}}>
                {tabs.map((tab, index) => {
                    return(
                        <Tab key={index} tabName={tab.tabName} color={cityColor}/>
                    )
                })}
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