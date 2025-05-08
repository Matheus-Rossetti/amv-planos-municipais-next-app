import React from "react";
import {ListContainerInterface} from "@/container-interfaces/list-container-interface";

export const ListContainer = ({containerTitle, lists, backgroundColor}: ListContainerInterface) => {
    return (
        <div style={{
            backgroundColor: "white",
            borderRadius: "12px",
            width: "75vw",
            minHeight: "20vh",
            display: "flex",
            flexDirection: "column",
            marginBottom: "2em",
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
                marginLeft: "10em",
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

                        {/* --- ALL ITEMS --- */}
                        <div style={{
                            display: "flex",
                            flexDirection: "row",
                            marginBottom: "3%",
                            marginLeft: "5%",
                        }}>
                            <div style={{
                                flexDirection: "column",
                                flex: 1,
                            }}>
                                {list.items.map((item, itemKey) => (

                                    /* --- ITEM --- */
                                    <div key={itemKey}
                                         style={{
                                             display: "flex",
                                             flexDirection: "row",
                                             alignItems: "center",
                                             marginTop: "1.5em",
                                             marginBottom: "1.5em",
                                         }}>
                                        <div style={{
                                            backgroundColor: backgroundColor,
                                            height: "10px",
                                            width: "10px",
                                            flexShrink: 0,
                                            borderRadius: 100,
                                        }}/>

                                        <div style={{
                                            marginLeft: "1%",
                                            fontWeight: "bold",
                                            letterSpacing: 0.6
                                        }}>{item}</div>
                                    </div>
                                ))}
                            </div>
                            <div style={{
                                marginRight: "5%",
                                backgroundColor: backgroundColor,
                                width: "0.5em",
                                flexShrink: 0,
                                borderRadius: "100px"
                            }}/>
                        </div>
                    </div>
                ))}
            </div>


        </div>
    )
}