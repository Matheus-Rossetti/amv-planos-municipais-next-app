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
                        gap: "1em",
                        marginTop: "3em",
                        marginBottom: "3em",
                        marginLeft: "2em",
                        marginRight: "2em",
                        paddingBottom: 7,
                        paddingTop: 7,
                        paddingLeft: 20,
                        paddingRight: 20,
                    }}>
                        {columns.map((column, index) => (
                            <div key={index} style={{
                                display: "flex",
                                flexDirection: "column",
                                borderRight: "1px solid black"
                            }}>
                                <div>{column.columnName}</div>
                                {column.items.map((item, index) => (
                                    <div key={index}>{item}</div>
                                ))}
                            </div>
                        ))}
                    </div>

                </div>
        </div>
    )
}