import {Property} from "csstype";
import BackgroundColor = Property.BackgroundColor;


export function cityColor(city: string): BackgroundColor{

    const colors: {[key: string]: BackgroundColor} = {
        "Jaraguá do Sul": "#86C226",
        "Massaranduba": "#E92D2C",
        "São João do Itaperiú": "#F8931F",
        "Schroeder": "#00923F",
        "Guaramirim": "#00ADEF",
        "Corupá": "#F8C301",
        "Barra Velha": "#015198",
    }
    return colors[city]
}