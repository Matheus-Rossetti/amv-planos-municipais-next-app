import {Property} from "csstype";
import BackgroundColor = Property.BackgroundColor;

interface Pdf{
    src: string,
    name: string,
}

export interface PdfInterface {
    containerTitle: string,
    pdfList: Pdf[],
    backgroundColor: BackgroundColor,
}

// TODO deve conter uma imagem da primeira página do PDF
//  para mostrar como preview, antes de abrir o PDF completo