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
                    backgroundColor: "green",
                    marginTop: "3em",
                    marginBottom: "3em",
                    marginLeft: "2em",
                    marginRight: "2em",
                    display: "flex",
                    flexDirection: "row",
                    flexWrap: "wrap",
                }}>

                <img style={{ // TODO colocar placeholder durante o loading da imagem e adicionar uma animação de fade quando ela terminar de carregar e aparecer
                    height: imageSizeMap[images[1].aspectRatio],
                    width: imageSizeMap[images[1].aspectRatio],
                    borderRadius: "15px",
                }}src={images[0].src}/>
                <img style={{ // TODO colocar placeholder durante o loading da imagem e adicionar uma animação de fade quando ela terminar de carregar e aparecer
                    marginLeft: "2%",
                    height: imageSizeMap[images[0].aspectRatio],
                    width: imageSizeMap[images[0].aspectRatio],
                    borderRadius: "15px",
                }}src={images[1].src}/>

            </div>
        </div>
    )
}







// {images.map((image, index) => (
//     <div key={index}>
//
//         <img style={{ // TODO colocar placeholder durante o loading da imagem e adicionar uma animação de fade quando ela terminar de carregar e aparecer
//             height: imageSizeMap[image.aspectRatio],
//             width: imageSizeMap[image.aspectRatio],
//             borderRadius: "15px",
//         }} src={image.src}/>
//     </div>
// ))}