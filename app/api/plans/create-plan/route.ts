import { createPlanService } from "@/services/plans/create-plan-service";
import { NextResponse } from "next/server";
import { Plan } from "@/models/plan-model";


export async function POST() {

    const plan: Plan = {
        createdBy: 1,
        name: "Plano teste",
        description: "Essa é uma descrição básica para o plano de teste",
        city: "Jaraguá do Sul",
        startDate: 2025,
        endDate: 2026,
        version: 0,
        startingTab: {
            tabName: "Início",
            containers: [
                {
                    containerType: "text",
                    containerTitle: "Descrição",
                    text: "Descrição do plano de teste"
                },
                {
                    containerType: "text",
                    containerTitle: "Objetivos",
                    text: "O objetivo do plano de teste é servir de teste!"
                },
                {
                    containerType: "text",
                    containerTitle: "Base legal",
                    text: "Lei número 1\nLei número 2\nLei número 3\nLei número 4"
                }
            ]
        },
        preparationTab:
            {
                tabName: "Elaboração do plano",
                containers: [
                    {
                        containerType: "text",
                        containerTitle: "Motivação",
                        text: "Esse plano foi elaborado para servir como teste no site de planos da Amvali"
                    },
                    {
                        containerType: "image",
                        containerTitle: "Imagens meramente ilustrativas",
                        images: [
                            {src: "https://picsum.photos/1080/1440", width: 1080, height: 1440, aspectRatio: "9/16"},
                            {src: "https://picsum.photos/1080/1920", width: 1080, height: 1920, aspectRatio: "9/16"}
                        ]
                    }
                ]
            },
        lawTab:
            {
                tabName: "Base Legal",
                containers: [
                    {
                        containerType: "text",
                        containerTitle: "Leis",
                        text: "Primeira lei: http://google.com\nSegunda lei: http://google.com\nTerceira lei: http://google.com\n"
                    }
                ]
            },
        goalsTab:
            {
                tabName: "Metas",
                containers:[]
            },
        libraryTab:
            {
                tabName: "Biblioteca",
                containers: [
                    {
                        containerType: "text",
                        containerTitle: "Biblioteca",
                        text: "Primeiro item: http://google.com\nSegundo item: http://google.com\nTerceiro item: http://google.com\n"
                    }
                ]
            },
        extraTabs: [
            {
                tabName: "Guia 1",
                containers: [
                    {
                        containerType: "image",
                        containerTitle: "Imagens representativas",
                        images: [
                            {src: "https://picsum.photos/1080/1440", width: 1080, height: 1440, aspectRatio: "9/16"},
                            {src: "https://picsum.photos/1920/1080", width: 1080, height: 1920, aspectRatio: "9/16"},
                            {src: "https://picsum.photos/1920/1080", width: 1080, height: 1920, aspectRatio: "9/16"},
                            {src: "https://picsum.photos/1080/1920", width: 1080, height: 1920, aspectRatio: "9/16"}
                        ]
                    },
                    {
                        containerType: "list",
                        containerTitle: "Lista Representativa",
                        lists: [
                            {
                                listTitle: "Primeira lista",
                                items: ["Primeiro item", "Segundo Item", "Terceiro Item"]
                            },
                            {
                                listTitle: "Segunda lista",
                                items: ["Primeiro item", "Segundo Item", "Terceiro Item"]
                            },
                            {
                                listTitle: "Terceira lista",
                                items: ["Primeiro item", "Segundo Item", "Terceiro Item"]
                            },
                            {
                                listTitle: "Quarta lista",
                                items: ["Primeiro item", "Segundo Item", "Terceiro Item"]
                            }
                        ]
                    }
                ]
            }
        ]
    }

    try{
        await createPlanService(plan)
        return NextResponse.json({message: `Plano criado com sucesso!`});
    }catch (e){
        // @ts-expect-error - ts complains about 'e' being -undefined-, but 'e' is always -string-
        return NextResponse.json({message: 'Falha ao criar o plano: ', error: e.message}, {status: 400});
    }
}