import React from 'react';
import {PdfContainerInterface} from "@/container-interfaces/pdf-container-interface";


export const PdfContainer = ({containerTitle, pdfList, backgroundColor}: PdfContainerInterface) => {

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
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginTop: "3em",
                    marginBottom: "3em",
                }}>

                    {...Array(5).map((_, index) => (
                        <div
                            key={index}
                            style={{
                            backgroundColor: "green",
                            height: "10rem",
                            width: "70%",
                        }}>{index}</div>
                    ))}
                </div>
            </div>


    )
}