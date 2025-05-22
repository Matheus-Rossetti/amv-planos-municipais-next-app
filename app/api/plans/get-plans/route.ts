import {NextRequest, NextResponse} from "next/server";
import {getPlansService} from "@/services/plans/get-plans-service";


export async function GET(req: NextRequest) {

    // guarda o 'id' de parametro da url
    const city:string | null = new URL(req.url).searchParams.get('city')

    if (city === null){
        return NextResponse.json({message: 'Municipio necessário '}, {status: 400});
    }

    try{
        const result = await getPlansService(city)
        return NextResponse.json(result);
    }catch (e){
        // @ts-expect-error - ts complains about 'e' being -undefined-, but 'e' is always -string-
        return NextResponse.json({message: 'Falha ao recuperar o plano: ', error: e.message}, {status: 400});
    }
}