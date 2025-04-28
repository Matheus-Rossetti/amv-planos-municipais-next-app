"use client"

import React from 'react';

export const ImageContainer = ({url, legenda}:{url: string, legenda: string}) => {

    // TODO verificar a quantidade de imagens e criar o layout com base nisso

    return (
        <div style={{
            backgroundColor: "white",
            borderRadius: "12px",
            width: "75vw",
            minHeight: "20vh",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
        }}>
            <img src="https://picsum.photos/1920/1080" alt={legenda} style={{
                height: "60%",
                width: "60%",

            }} />
        </div>
    )
}
