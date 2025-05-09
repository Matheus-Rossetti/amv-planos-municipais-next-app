import React from "react";
import { ImageContainerInterface } from "@/container-interfaces/image-container-interface";
export const ImageContainer = ({containerTitle, images, backgroundColor}: ImageContainerInterface) => {


    // TODO refactor this to run when inserting the image url into the db, make a map {"url": "aspectRatio"}
    {/* ---------- LOGIC ---------- */}

    // const imageAmount: number = images.length


    const imageSizeMap: Record<number, string> = {

        1.7: "70%",
        0.5: "25%",

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

            <div style={{
                // backgroundColor: "green",
                marginTop: "3em",
                marginBottom: "3em",
                marginLeft: "2em",
                marginRight: "2em",
                height: "100%",
                width: "100%",
                display: "flex",
                flexDirection: "row" // TODO tirar a row, apenas para testes
            }}>
                <img style={{ // TODO colocar placeholder durante o loading da imagem e adicionar uma animação de fade quando ela terminar de carregar e aparecer
                    width: imageSizeMap[images[1].aspectRatio],
                    borderRadius: "15px",
                }}src={images[0].url}/>
                <img style={{ // TODO colocar placeholder durante o loading da imagem e adicionar uma animação de fade quando ela terminar de carregar e aparecer
                    marginLeft: "2em",
                    flexShrink: 0,
                    width: imageSizeMap[images[0].aspectRatio],
                    borderRadius: "15px",
                }}src={images[1].url}/>
            </div>
        </div>
    )
}