import { Property } from "csstype";
import BackgroundColor = Property.BackgroundColor;

interface List {
    listTitle: string,
    items: string[],
}


export interface ListInterface {
    containerTitle: string,
    lists: List[],
    backgroundColor: BackgroundColor,
}


// --- JSON ---
// {
//     "containerType": "list",
//     "containerTitle": "Lista Representativa",
//     "lists": [
//         {
//             "listTitle": "Primeira lista",
//             "items": ["Primeiro item", "Segundo Item", "Terceiro Item"]
//         },
//         {
//             "listTitle": "Segunda lista",
//             "items": ["Primeiro item", "Segundo Item", "Terceiro Item"]
//         },
//         {
//             "listTitle": "Terceira lista",
//             "items": ["Primeiro item", "Segundo Item", "Terceiro Item"]
//         },
//     ]
// }