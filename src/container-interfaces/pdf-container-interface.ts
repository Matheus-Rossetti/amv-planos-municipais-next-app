import {Property} from "csstype";
import BackgroundColor = Property.BackgroundColor;

interface Pdf{
    src: string,
    name: string,
}

export interface PdfContainerInterface {
    containerTitle: string,
    pdfList: Pdf[],
    backgroundColor: BackgroundColor,
}