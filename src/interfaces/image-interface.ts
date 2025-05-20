import {Property} from "csstype";
import BackgroundColor = Property.BackgroundColor;

interface Image { // Do not confuse with Image class, use only inside this scope.
    src: string,
    width: number,
    height: number,
    aspectRatio: string, // TODO O aspectRatio aqui não é exatamente o da imagem, ele deve ser
                         //     ou "16/9" ou "9/16", para decidir qual é a proporção a se colocar
                        //      pode se verificar height > width ? "9/16" : "16/9"
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