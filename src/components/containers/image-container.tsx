'use client'

import React from "react";
import {ImageInterface} from "@/container-interfaces/image-interface";

export const ImageContainer = ({containerTitle, images, backgroundColor}: ImageInterface) => {

    const imageSizeMap: Record<string, string> = {
        "16/9": "74.3%", // 16:9
        "9/16": "23.5%", // 9:16
    }

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
            <div style={{
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

            <div
                style={{
                    // backgroundColor: (backgroundColor.toString() + "B3"), // Debug only
                    marginTop: "3em",
                    marginBottom: 'calc(3em - 1.5vw)', // Each image has 1.5vw marginBottom, so we subtract to keep a coherent design
                    marginLeft: "2em",
                    marginRight: "2em",
                    display: "flex",
                    flexDirection: "row",
                    flexWrap: "wrap",
                    justifyContent: "center",
                    gap: "1.2vw",
                }}>
                {images.map((image, index) => {
                    // const aspectRatio: string = image.width > image.height ? "horizontal" : "vertical" // TODO colocar na função de guardar a imagem no json
                    return (
                        <div key={index}
                             style={{
                                 aspectRatio: image.aspectRatio,
                                 width: imageSizeMap[image.aspectRatio],
                                 backgroundColor: (backgroundColor.toString() + "B3"), // "B3" = 70% opacity
                                 borderRadius: "15px",
                                 display: "flex",
                                 justifyContent: "center",
                             }}>
                            <img
                                style={{
                                    borderRadius: "15px",
                                    width: "100%",
                                    objectFit: "contain",
                                    display: "block",
                                }} src={image.src}/>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}