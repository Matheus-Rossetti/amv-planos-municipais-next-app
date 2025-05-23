import {NextRequest, NextResponse} from "next/server";
import {getPlansService} from "@/services/plans/get-plans-service";


export async function GET(req: NextRequest) {
    // guarda o 'city' de parâmetro da url
    const city:string | null = new URL(req.url).searchParams.get('city')
    if (!city){return NextResponse.json({ error: 'Municipio necessário!' }, { status: 400 });}

    try{
        const result = await getPlansService(city)
        return NextResponse.json(result);
    }catch (e){
        console.log(e)
        return NextResponse.json({ error: 'Erro interno.' }, { status: 500 } );
    }
}