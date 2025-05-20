import React from 'react';
import {TextInterface} from "@/interfaces/text-interface";

export const TextContainer = ({containerTitle, text, backgroundColor}: TextInterface) => {
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
            <div style={{ // TODO colocar margem na direita também pra quando o titulo for grande o suficiente para chegar ao final do container
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

            {/* ---------- TEXT ---------- */}
            <div style={{
                display: "flex",
                flexDirection: "row",
            }}>
                <div style={{
                    minHeight: "1px",
                    width: "100%",
                    marginTop: "3em",
                    marginBottom: "3em",
                    marginLeft: "10%",
                    marginRight: "5%",
                    lineHeight: "170%",
                }}>{text}</div>

                <div style={{
                    marginRight: "5%",
                    marginTop: "2em",
                    marginBottom: "2em",
                    backgroundColor: backgroundColor,
                    width: "0.5em",
                    flexShrink: 0,
                    borderRadius: "100px"
                }}
                />
            </div>
        </div>
    );
};