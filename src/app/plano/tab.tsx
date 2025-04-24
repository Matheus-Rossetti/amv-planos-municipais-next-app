import React from 'react';
import {Property} from "csstype";
import BackgroundColor = Property.BackgroundColor;

export const Tab = ({tabName, color} : {tabName: string, color: BackgroundColor}) => {
    return (
        <div style={{
            backgroundColor: color,
            // opacity: 0.5, TODO checar o hover e então aplicar
            width: "10vw",
            height: "5vh",
            display: "flex",
            alignItems: "center" ,
            justifyContent: "center",
            fontWeight: "bold",
            color: "white"
        }}>
            {tabName}
        </div>
    )
}
