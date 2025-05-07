import {Property} from "csstype";
import BackgroundColor = Property.BackgroundColor;

interface List {
    listTitle: string,
    items: string[],
}


export interface ListContainerInterface {
    containerTitle: string,
    lists: List[],
    backgroundColor: BackgroundColor,
}