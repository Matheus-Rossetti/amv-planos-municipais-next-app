
import {NextRequest, NextResponse} from "next/server";
import {getPlanService} from "@/services/plans/get-plan-service";


export async function GET(req: NextRequest) {

    // guarda o 'id' de parametro da url
    const id:number = Number(new URL(req.url).searchParams.get('id'))

    try{
        const result = await getPlanService({id: id})
        return NextResponse.json(result);
    }catch (e){
        // @ts-expect-error - ts complains about 'e' being -undefined-, but 'e' is always -string-
        return NextResponse.json({message: 'Falha ao recuperar o plano: ', error: e.message}, {status: 400});
    }
}