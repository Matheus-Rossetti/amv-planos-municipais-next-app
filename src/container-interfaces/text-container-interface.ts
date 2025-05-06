import {Property} from "csstype";
import BackgroundColor = Property.BackgroundColor;

export interface TextContainerInterface {
    containerTitle: string,
    text: string,
    backgroundColor: BackgroundColor,
}