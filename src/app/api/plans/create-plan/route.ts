import { createPlanService } from "@/services/plans/create-plan-service";
import { NextResponse } from "next/server";


export async function POST(req: Request) {


    const { user, planName, description, validity, authority, objective, law, status } = await req.json()

    try{
        await createPlanService({
            user: user,
            planName: planName,
            description: description,
            validity: validity,
            authority: authority,
            objective: objective,
            law: law,
            status: status,
        })
        return NextResponse.json({message: `Plano ${planName} criado com sucesso!`});
    }catch (e){
        // @ts-expect-error - ts complains about 'e' being -undefined-, but 'e' is always -string-
        return NextResponse.json({message: 'Falha ao criar o plano: ', error: e.message}, {status: 400});
    }
}