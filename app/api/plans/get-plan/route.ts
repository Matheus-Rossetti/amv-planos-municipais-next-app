import {NextRequest, NextResponse} from "next/server";
import {getPlanService} from "@/services/plans/get-plan-service";


export async function GET(req: NextRequest) {
    // guarda o 'id' de parametro da url
    const id:number = Number(new URL(req.url).searchParams.get('id'))
    if(!id){return NextResponse.json({ error: "Id necessário!" }, {status: 400 })}

    try{
        const result = await getPlanService(id)
        return NextResponse.json(result);
    }catch (e){
        console.log(e)
        return NextResponse.json({ error: 'Erro interno.' }, { status: 500 } );
    }
}