import {Property} from "csstype";
import BackgroundColor = Property.BackgroundColor;

export interface TextInterface {
    containerTitle: string,
    text: string,
    backgroundColor: BackgroundColor,
}


// --- JSON ---
// {
//     "containerType": "text",
//     "containerTitle": "Descrição",
//     "text": "Essa é a descrição do plano!"
// }