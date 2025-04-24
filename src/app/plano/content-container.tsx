import React from "react";

export const ContentContainer = ({conteudo, titulo}: {conteudo: string, titulo: string}) => {
    return(
     <div style={{
         backgroundColor: "white",
         borderRadius: "12px",
         // padding: "5%"
     }}>
         <div style={{
             fontSize: "xx-large",
             paddingTop: "3%",
             paddingLeft: "6%"

         }}>{titulo}</div>
         <div style={{
             padding: "15%"
         }}
         >{conteudo}</div>

     </div>
    )
}