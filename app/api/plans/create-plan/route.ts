import { createPlanService } from "@/services/plans/create-plan-service";
import { NextResponse } from "next/server";
import {Plan} from "@/models/plan-model";

export async function POST() {

    // TODO pegar o plan a partir de um json no body da requisição e instanciar o objeto
    const plan: Plan

    try{
        await createPlanService(plan)
        return NextResponse.json({message: `Plano criado com sucesso!`});
    }catch (e){
        console.log(e)
        return NextResponse.json({ error: "Erro interno." }, { status: 500 });
    }
}