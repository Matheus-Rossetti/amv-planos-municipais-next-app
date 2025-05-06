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
                marginTop: "3%",
                marginLeft: "5%",
            }}>
                <div style={{
                    color: "white",
                    marginTop: 10,
                    marginBottom: 10,
                    marginLeft: 20,
                    marginRight: 20,

                }}>
                    {containerTitle}
                </div>
            </div>
             {text}
        </div>
    );
};