"use client"

import React, {useState} from 'react';
import {Property} from "csstype";
import BackgroundColor = Property.BackgroundColor;

export const Tab = ({tabName, isCurrentTab, color} : {tabName: string, isCurrentTab: boolean,color: BackgroundColor}) => {

    const [isHovered, setIsHovered] = useState(false);

    return (

        <div style={{
            backgroundColor: color,
            opacity: isHovered || isCurrentTab ? 1 : 0.5,
            width: "10vw",
            height: "5vh",
            display: "flex",
            alignItems: "center" ,
            justifyContent: "center",
            fontWeight: "bold",
            color: "white",
            marginLeft: "0.25vw",
            marginRight: "0.25vw",
            borderBottomRightRadius: "8px",
            borderBottomLeftRadius: "8px"
        }}
             onMouseEnter={() => setIsHovered(true)}
             onMouseLeave={() => setIsHovered(false)}
        >
            {tabName}
        </div>

    )
}
