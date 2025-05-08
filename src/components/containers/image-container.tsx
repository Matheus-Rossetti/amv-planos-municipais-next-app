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

                <img style={{
                    width: "50%"

                }}src={images[0]}/>
        </div>
    )
}