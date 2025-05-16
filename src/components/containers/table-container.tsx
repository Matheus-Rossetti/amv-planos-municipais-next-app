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
                    backgroundColor: backgroundColor,

                    width: "fit-content",
                    display: "flex",
                    justifyContent: "center",
                    marginTop: "3em",
                    marginBottom: "3em",
                    marginLeft: "2em",
                    marginRight: "2em"
                }}>
                    <div style={{
                        display: "flex",
                        flexDirection: "row",
                        gap: "1em",
                    }}>
                        {columns.map((column, index) => (
                            <div key={index}>
                                {column.columnName}
                            </div>
                        ))}
                    </div>

                </div>
        </div>
    )
}