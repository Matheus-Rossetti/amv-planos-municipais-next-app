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