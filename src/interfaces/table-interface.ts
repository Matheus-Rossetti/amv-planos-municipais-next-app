import {Property} from "csstype";
import BackgroundColor = Property.BackgroundColor;

interface Column {
    columnName: string,
    items: string[],
}

export interface TableInterface {
    containerTitle: string,
    columns: Column[],

    backgroundColor: BackgroundColor,
}

// TODO refatorar, não vai funcionar assim.