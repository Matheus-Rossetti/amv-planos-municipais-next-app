"use client"

import React, {useState} from 'react';
import {Property} from "csstype";
import BackgroundColor = Property.BackgroundColor;

export const Tab = ({tabName, tabIndex, isSelected, changeCurrentTab, backgroundColor} : {tabName: string, tabIndex: number, isSelected: boolean, changeCurrentTab: React.Dispatch<React.SetStateAction<number>>, backgroundColor: BackgroundColor}) => {

    const [isHovered, setIsHovered] = useState(false);

    return (

        // maybe receive tab index

        <div style={{
            backgroundColor: backgroundColor,
            opacity: isHovered || isSelected ? 1 : 0.5,
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
            borderBottomLeftRadius: "8px",

            userSelect: "none",
            cursor: "pointer",
        }}
             onMouseEnter={() => setIsHovered(true)}
             onMouseLeave={() => setIsHovered(false)}
             onClick={() => changeCurrentTab(tabIndex)}
        >
            {tabName}
        </div>

    )
}
