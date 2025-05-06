import React from 'react';
import {TextContainerInterface} from "@/container-interfaces/text-container-interface";

export const TextContainer = ({containerTitle, text, backgroundColor}: TextContainerInterface) => {
    return (
        <div style={{
            backgroundColor: "white",
            borderRadius: "12px",
            width: "75vw",
            minHeight: "20vh",
            display: "flex",
            flexDirection: "column",
        }}>
            <div style={{
                backgroundColor: backgroundColor,
                fontSize: "xx-large",
                width: "fit-content",
                marginTop: "0.7em",
                marginLeft: "1em",
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
            </div>
             { text }
        </div>
    );
};