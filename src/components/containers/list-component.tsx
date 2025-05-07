import React from "react";
import {ListContainerInterface} from "@/container-interfaces/list-container-interface";

export const ListComponent = ({containerTitle, lists, backgroundColor}: ListContainerInterface) => {

    return(
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
                backgroundColor: backgroundColor,
                fontSize: "xx-large",
                width: "fit-content",
                marginTop: "0.7em",
                marginLeft: "1em",
                marginRight: "1em",
                borderRadius: "10px",
            }}>
                <div style={{
                    color: "white",
                    marginTop: 7,
                    marginBottom: 7,
                    marginLeft: 20,
                    marginRight: 20,
                }}>
                    { containerTitle }
                </div>
                {/* ---------- LISTS ---------- */}

            </div>




        </div>
    )
}