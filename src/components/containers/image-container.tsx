'use client'

import React from "react";
import {ImageContainerInterface} from "@/container-interfaces/image-container-interface";

export const ImageContainer = ({containerTitle, images, backgroundColor}: ImageContainerInterface) => {

    // TODO refactor this to run when inserting the image url into the db, make a map {"url": "aspectRatio"}
    {/* ---------- LOGIC ---------- */
    }

    // const imageAmount: number = images.length

    const imageSizeMap: Record<number, string> = {
        1.7: "74.3%",
        0.5: "23.5%",
        // TODO adicionar o 4:3
    }

    // images: [
    //      {
    //          src: ,
    //      }
    // ]

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
                    // backgroundColor: "green", // Debug only
                    marginTop: "3em",
                    marginBottom: 'calc(3em - 1.5vw)', // Each image has 1.2vw marginBottom, so we subtract to keep a coherent design
                    marginLeft: "2em",
                    marginRight: "2em",
                    display: "flex",
                    flexDirection: "row",
                    flexWrap: "wrap",
                    justifyContent: "space-between",
                    // gap: "1.893em", // Changing this number breaks the design, I'm not kidding
                }}>
                {images.map((image, index) => (
                    <img key={index}
                         style={{ // TODO colocar placeholder durante o loading da imagem e adicionar uma animação de fade quando ela terminar de carregar e aparecer
                        height: imageSizeMap[image.aspectRatio],
                        width: imageSizeMap[image.aspectRatio],
                        borderRadius: "15px", // TODO alterar para se adaptar ao width da tela, talvez usar 'calc(15px * 0.2vw)' ou coisa assim
                             marginBottom: `1.5vw`,
                    }}src={image.src}/>
                ))}
            </div>
        </div>
    )
}







// {images.map((image, index) => (
//     <div key={index}>
//
//             height: imageSizeMap[image.aspectRatio],
//             width: imageSizeMap[image.aspectRatio],
//             borderRadius: "15px",
//         }} src={image.src}/>
//     </div>
// ))}