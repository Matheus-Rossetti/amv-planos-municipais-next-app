import React from 'react'
import {Property} from "csstype";
import BackgroundColor = Property.BackgroundColor;



export const PlanFooter = ({backgroundColor}: {backgroundColor: BackgroundColor}) => {
    return (
        <div style={{
            marginTop: "auto", // Garante que o footer sempre estará no fim da column
            width: "100%",
            height: "2em",
            backgroundColor: backgroundColor,
        }}> Footer </div>

    )
}