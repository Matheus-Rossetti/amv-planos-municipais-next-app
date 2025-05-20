import {Property} from "csstype";
import BackgroundColor = Property.BackgroundColor;

interface Image { // Do not confuse with Image class, use only inside this scope.
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

// --- JSON ---
// {
//     "containerType": "image",
//     "containerTitle": "Imagens meramente ilustrativas",
//     "images": [
//         {"src": "https://picsum.photos/1080/1440", "width": 1080, "height": 1440, "aspectRatio": "9/16"},
//         {"src": "https://picsum.photos/1080/1920", "width": 1080, "height": 1920, "aspectRatio": "9/16"}
//     ]
// }