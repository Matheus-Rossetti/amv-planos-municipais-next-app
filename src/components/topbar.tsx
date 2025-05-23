import React from "react";
import {Property} from "csstype";
import BackgroundColor = Property.BackgroundColor;

export const TopBar = ({planName, color}:{planName: string, color: BackgroundColor}) => {
    return (
        <div style={{
            backgroundColor: color,
            width: "100%",
            flexDirection: "column",
            height: "15vh",
            display: "flex",
            alignItems: "center" ,
            // justifyContent: "center",
            paddingTop: "5vh",
            boxShadow: "0px 7px 4px rgba(0, 0, 0, 0.25)",
            position: 'relative',
            zIndex: 1
        }}>
            <div style={{
                color: "white",
                fontWeight: "bolder",
                fontSize: "xxx-large"
            }}>
                {planName}
            </div>
        </div>
    );
};
