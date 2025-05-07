import React from "react";
import {ListContainerInterface} from "@/container-interfaces/list-container-interface";

export const ListComponent = ({containerTitle, lists, backgroundColor}: ListContainerInterface) => {
    return (
        <div style={{
            backgroundColor: "white",
            borderRadius: "12px",
            width: "75vw",
            minHeight: "20vh",
            display: "flex",
            flexDirection: "column",
        }}>

            {/* ---------- TITLE ---------- */}
            <div style={{
                fontSize: "xx-large",
                backgroundColor: backgroundColor,
                color: "white",
                width: "fit-content",
                marginTop: "0.7em",
                marginLeft: "1em",
                borderRadius: "10px",
                paddingBottom: 7,
                paddingTop: 7,
                paddingLeft: 20,
                paddingRight: 20,
            }}>
                {containerTitle}
            </div>

            {/* ---------- LISTS ---------- */}
            <div style={{
                marginTop: "3em",
                marginBottom: "3em", // TODO tirar esse margin pois cada conjunto de item da lista já tem margin
                marginLeft: "10%",
            }}>
                {lists.map((list, titleKey) => (
                    <div key={titleKey}>

                        {/* --- LIST TITLE --- */}
                        <div style={{
                            backgroundColor: backgroundColor,
                            color: "white",
                            width: "fit-content",
                            borderRadius: "5px",
                            fontSize: "x-large",
                            paddingBottom: 5,
                            paddingTop: 5,
                            paddingRight: 10,
                            paddingLeft: 10,
                        }}>
                            {list.listTitle}
                        </div>

                        {/* --- LIST ITEMS --- */}
                        <div style={{
                            marginTop: "2%",
                            marginBottom: "3%", // TODO Colocar a lista de itens numa row e no end colocar uma barrinha com a cor do municipio, assim como no container de texto, mas deixar separado somente no conjunto de itens
                            marginLeft: "6%",
                        }}>
                            {list.items.map((item, itemKey) => (
                                <div key={itemKey}>

                                    {/* --- ITEM --- */}
                                    <div style={{
                                        display: "flex",
                                        flexDirection: "row",
                                        alignItems: "center",
                                        margin: 20,
                                    }}>
                                        <div style={{
                                            backgroundColor: backgroundColor,
                                            height: "10px", // TODO alterar a escala de tamanho para ser responsiva
                                            width: "10px",
                                            borderRadius: 100,
                                        }}/>
                                        <div style={{
                                            marginLeft: "1%",
                                            fontWeight: "bold",
                                            letterSpacing: 0.6
                                        }}>
                                            {item}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>


        </div>
    )
}