import {selectPlanWhereId} from "@/db/plans/select-plan-where-id";

export async function getPlanService(id: number){
    try {
        return await selectPlanWhereId(id);
    }catch (e){
        //@ts-expect-error cala boca TS, meu deus
        throw Error(`Service error: ${e.message}`)
    }
}