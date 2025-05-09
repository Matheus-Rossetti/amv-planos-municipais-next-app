import {Property} from "csstype";
import BackgroundColor = Property.BackgroundColor;

interface Image { // Do not confuse with Image class, use only inside this scope.
    url: string,
    aspectRatio: number
}

export interface ImageContainerInterface {
    containerTitle: string,
    images: Image[],
    backgroundColor: BackgroundColor,
}