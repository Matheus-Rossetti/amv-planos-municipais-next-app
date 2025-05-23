import { NextRequest, NextResponse } from "next/server";
import {updatePlanService} from "@/services/plans/update-plan-service";
import {Plan} from "@/models/plan-model";

export async function POST(req: NextRequest){
    //TODO receber o plano, seja como objeto Plan ou um json no body talvez.

    const plan: Plan

    try{
        await updatePlanService(plan)
    }catch (e) {
        console.log(e)
        return NextResponse.json({ error: "Erro interno "}, { status: 400 })
    }
}