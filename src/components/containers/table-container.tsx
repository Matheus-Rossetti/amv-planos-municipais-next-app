import React from "react";
import {TableInterface} from "@/container-interfaces/table-interface";

export const TableContainer = ({containerTitle, columns, rows, backgroundColor}: TableInterface) => {

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
                    flexDirection: "column", // occupies full width, don't know why
                    justifyContent: "center",
                    marginTop: "3em",
                    marginBottom: "3em",
                    marginLeft: "2em",
                    marginRight: "2em"
                }}>
                    {/* --- COLUMNS --- */}
                    <div style={{
                        height: "100%",
                        backgroundColor: backgroundColor,
                        padding: "1em",
                        display: "flex",
                        flexDirection: "row",
                        gap: "1em"
                    }}>
                        {columns.map((column, index) => (
                            <div key={index} style={{

                            }}>
                                {column}
                            </div>
                        ))}
                    </div>
                {/* --- ROWS --- */}
                    <div>
                        {rows.map((row, index) => (
                            <div key={index} style={{
                                display: "flex",
                                flexDirection: "row",
                            }}>
                                {row.rowItems}

                            </div>
                        ))}
                    </div>
                </div>
        </div>
    )
}