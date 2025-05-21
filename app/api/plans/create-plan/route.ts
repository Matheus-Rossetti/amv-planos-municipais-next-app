import { createPlanService } from "@/services/plans/create-plan-service";
import { NextResponse } from "next/server";

export async function POST() {

    try{
        await createPlanService()
        return NextResponse.json({message: `Plano criado com sucesso!`});
    }catch (e){

        console.log(e)
        // @ts-expect-error - ts complains about 'e' being -undefined-, but 'e' is always -string-
        return NextResponse.json({message: 'Falha ao criar o plano: ', error: e.message}, {status: 400});
    }
}