import {Property} from "csstype";
import BackgroundColor = Property.BackgroundColor;

interface Row {
    rowItems: string[]
}

export interface TableInterface {
    containerName: string,
    columns: string[],
    rows: Row[],

    backgroundColor: BackgroundColor,
}