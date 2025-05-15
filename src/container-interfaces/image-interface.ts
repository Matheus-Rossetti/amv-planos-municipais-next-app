import {Property} from "csstype";
import BackgroundColor = Property.BackgroundColor;

export interface Image { // Do not confuse with Image class, use only inside this scope.
    src: string,
    width: number,
    height: number,
    aspectRatio: string,
}

export interface ImageInterface {
    containerTitle: string,
    images: Image[],
    backgroundColor: BackgroundColor,
}