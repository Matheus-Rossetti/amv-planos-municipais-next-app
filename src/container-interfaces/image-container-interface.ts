import {Property} from "csstype";
import BackgroundColor = Property.BackgroundColor;

interface Image { // Do not confuse with Image class, use only inside this scope.
    src: string,
    width: number,
    height: number,
    aspectRatio: number,
}

export interface ImageContainerInterface {
    containerTitle: string,
    images: Image[],
    backgroundColor: BackgroundColor,
}