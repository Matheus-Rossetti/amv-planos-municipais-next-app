import {Property} from "csstype";
import BackgroundColor = Property.BackgroundColor;

export interface ImageContainerInterface {
    containerTitle: string,
    images: string[],
    backgroundColor: BackgroundColor,
}