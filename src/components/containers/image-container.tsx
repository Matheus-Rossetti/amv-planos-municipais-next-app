import React from "react";
import { ImageContainerInterface } from "@/container-interfaces/image-container-interface";
import {resolve} from "node:dns";

export const ImageContainer = ({containerTitle, images, backgroundColor}: ImageContainerInterface) => {


    // TODO refactor this to run when inserting the image url into the db, make a map {"url": "aspectRatio"}
    {/* ---------- LOGIC ---------- */}


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
                height: "100%",
                width: "100%",
                display: "flex",
                marginLeft: "2em",
                flexDirection: "row" // TODO tirar a row, apenas para testes
            }}>
                <img style={{ // TODO colocar placeholder durante o loading da imagem e adicionar uma animação de fade quando ela terminar de carregar e aparecer
                    width: "25%",
                    borderRadius: "15px",
                }}src={images[0]}/>
                <img style={{ // TODO colocar placeholder durante o loading da imagem e adicionar uma animação de fade quando ela terminar de carregar e aparecer
                    marginLeft: "1em",
                    width: "70%",
                    borderRadius: "15px",
                }}src={images[1]}/>
            </div>
        </div>
    )
}