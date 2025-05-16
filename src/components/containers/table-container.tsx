import React from "react";
import {TableInterface} from "@/container-interfaces/table-interface";

export const TableContainer = ({containerTitle, columns, backgroundColor}: TableInterface) => {

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
                    justifyContent: "center"
                }}>
                    <div style={{
                        display: "flex",
                        flexDirection: "row",
                        width: "fit-content",
                        // backgroundColor: "aquamarine",
                        borderRadius: "15px",
                        border: "1px solid black",
                        // gap: "1em",
                        marginTop: "3em",
                        marginBottom: "3em",
                        marginLeft: "2em",
                        marginRight: "2em",
                        // paddingBottom: 7,
                        // paddingTop: 7,
                        // paddingLeft: 20,
                        // paddingRight: 20,
                    }}>
                        {columns.map((column, index) => (
                            <div key={index} style={{
                                display: "flex",
                                flexDirection: "column",   // TODO tem que colocar os textos em divs separadas, tem que ter uma div pra ser a "caixa" com um estilo, pra fazer as bordas e outra dentro com o texto, se não ficam espaços entre as bordas
                                borderRight: index === (columns.length - 1) ? "0px solid black" : "1px solid black",
                                // paddingRight: index === (columns.length - 1) ? "0" : "10px",
                            }}>
                                <div style={{
                                    borderBottom: "1px solid black",
                                }}>{column.columnName}</div>
                                {column.items.map((item, index) => (
                                    <div key={index} style={{
                                        borderBottom: "1px solid black",
                                    }}>{item}</div>
                                ))}
                            </div>
                        ))}
                    </div>

                </div>
        </div>
    )
}