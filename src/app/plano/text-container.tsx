import React from "react";

export const TextContainer = ({titulo, conteudo}: {titulo: string, conteudo: string}) => {
    return (
        <div style={{
            backgroundColor: "white",
            borderRadius: "12px",
            width: "75vw",
            minHeight: "20vh",
        }}>
            {/*Titulo*/}
            <div style={{
                fontSize: "xx-large",
                paddingTop: "3%",
                paddingLeft: "6%"
            }}>{titulo}</div>
            {/*conteudo*/}
            <div style={{
                padding: "15%"
            }}
            >{conteudo}</div>
        </div>
    )
}