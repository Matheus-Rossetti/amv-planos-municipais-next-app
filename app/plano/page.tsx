'use client'

// TODO alterar para puxar o plano do db ou receber o plano de outro lugar
import plan from "@/assets/plano-teste.json"
import React, {useEffect, useState} from "react";
import {getCityColor} from "@/utils/get-city-color";
import {TextContainer} from "@/components/containers/text-container";
import {ListContainer} from "@/components/containers/list-container";
import {ImageContainer} from "@/components/containers/image-container";
import {Property} from "csstype";
import BackgroundColor = Property.BackgroundColor;
import {TopBar} from "@/components/topbar";
import {Tab} from "@/components/tab";
import {PlanFooter} from "@/components/plan-footer";
import {useSearchParams} from "next/navigation";
import { Plan } from "@/models/plan-model";

export default function PlanPage() {


    const [currentTab, changeCurrentTab] = useState<number>(0)
    const [plan, setPlan] = useState<Plan | null>()
    
    const searchParams = useSearchParams()
    const id = searchParams.get('id')

    useEffect(() => {
        async function fetchPlan(){
            const res = await fetch(`api/plans/get-plan?id=${id}`)
            const json: Plan = await res.json()
            setPlan(json)
        }
        fetchPlan()
    }, [id])

    console.log(`PLANO: ${plan}`) // TODO plano da undefined, não sei o que fazer aqui



    const cityColor: BackgroundColor = getCityColor(plan.city)
    
    const tabs = [
        plan.startingTab,
        plan.preparationTab,
        plan.lawTab,
        plan.libraryTab,
        ...plan.extraTabs
    ] // Coloca todas as tabs em um array, assim podemos iterar por elas usando um index

    return (
        <div style={{
            backgroundColor: "#F3EFE8",
            display: "flex",
            minHeight: "100vh",
            alignItems: "center",
            flexDirection: "column",
        }}>
            <TopBar planName={plan.name} color={cityColor}/>

            {/* ---------------- TABS ---------------- */}
            <div style={{display: "flex", flexDirection: "row", alignItems: "flex-start", minWidth: "100%"}}>
                {tabs.map((tab, index) => {
                    return (
                        <Tab
                            key={index}
                            tabName={tab.tabName}
                            tabIndex={index}
                            changeCurrentTab={changeCurrentTab}
                            isSelected={currentTab === index}
                            backgroundColor={cityColor}/>
                    )
                })}
            </div>

            {/* ---------------- CONTAINERS ---------------- */}
            <div style={{
                marginTop: "3vh"
            }}>
                {tabs[currentTab].containers.map((container, index) => {
                    // There's a workaround for the error bellow, but it's too much work for little benefit, would have to define a 'type' for each containerType
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
            <PlanFooter backgroundColor={cityColor}/>
        </div>

    )
}