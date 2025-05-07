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
                marginBottom: "3em",
                marginLeft: "10%",
            }}>
                {lists.map((list, titleKey) => (
                    <div key={titleKey}>
                        {/* --- LIST TITLE --- */}
                        <div style={{
                            backgroundColor: backgroundColor,
                            width: "fit-content",
                            borderRadius: "5px",
                            fontSize: "x-large",
                            paddingBottom: 100,
                            marginTop: 1,
                        }}>
                            <div style={{
                                color: "white",
                                marginLeft: 10,
                                marginRight: 10,

                            }}>
                                {list.listTitle}
                            </div>
                        </div>
                        {/* --- LIST ITEMS --- */}
                        <div>
                            {list.items.map((item, itemKey) => (
                                <div key={itemKey}>
                                    {/* --- ITEM --- */}
                                    <div>
                                        {item}
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