import React from "react";

export const TextContainer = ({titulo, conteudo}: {titulo: string, conteudo: string}) => {
    return (
        <div style={{
            backgroundColor: "white",
            borderRadius: "12px",
            minWidth: "65vw",
            minHeight: "20vh",
        }}>
            <div style={{
                fontSize: "xx-large",
                paddingTop: "3%",
                paddingLeft: "6%"
            }}>teste</div>
            <div style={{
                padding: "15%"
            }}
            >teste</div>
        </div>
    )
}