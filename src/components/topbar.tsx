import React from "react";
import {Property} from "csstype";
import BackgroundColor = Property.BackgroundColor;

export const TopBar = ({planName, color}:{planName: string, color: BackgroundColor}) => {
    return (
        <div style={{
            backgroundColor: color,
            padding: "20px",
            width: "100vw",
            flexDirection: "column",
            height: "17vh",
            display: "flex",
            alignItems: "center" ,
            justifyContent: "center"
        }}>
            <h1 style={{
                color: "white",
                fontWeight: "bold"
            }}>
                {planName}
            </h1>
        </div>
    );
};
