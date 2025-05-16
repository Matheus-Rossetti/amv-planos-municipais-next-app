import {Property} from "csstype";
import BackgroundColor = Property.BackgroundColor;

interface Row {
    rowItems: string[]
}

export interface TableInterface {
    containerTitle: string,
    columns: string[],
    rows: Row[],

    backgroundColor: BackgroundColor,
}