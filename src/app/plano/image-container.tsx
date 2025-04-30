"use client"

import React from 'react';

export const ImageContainer = ({urls, legenda, titulo}:{urls: string[], legenda: string, titulo: string}) => {

    return (
        <div style={{
            backgroundColor: "white",
            borderRadius: "12px",
            width: "75vw",
            minHeight: "20vh",
            display: "flex",
            // justifyContent: 'center',
            // alignItems: 'center',
            flexDirection: 'column',
            }}>

            <div style={{
                fontSize: "xx-large",
                paddingTop: "3%",
                paddingLeft: "6%"
            }}>
                {titulo}
            </div>

            {/* -------- IMAGE_GRID -------- */}
            <div style={{
                paddingLeft: '10%',
                paddingRight: '10%',
                paddingTop: '7%',
                paddingBottom: '7%',
                display: "grid",
                gridTemplateColumns: "repeat(3, 1fr)",
                gap: "2%",
            }}>
            {urls.map((url: string, index: number)=> (
                <div key={ index } style={{
                    display: 'flex',
                    flexDirection: 'column'
                }}>
                    <div style={{
                        width: '100%',
                        wordWrap: 'break-word',
                        paddingLeft: '2%',
                        paddingBottom: '2%',
                        fontWeight: 'bold',
                    }}>fjepjweppgewkgiwehnigieweoewhniogedsfdadavsasdfaefevvfefgwegweegdsfvhn</div>
                    <img src={ url } alt={legenda} style={{
                        width: '100%',
                        borderRadius: '10px',
                    }} />
                </div>
            ))}
            </div>
        </div>
    )
}
