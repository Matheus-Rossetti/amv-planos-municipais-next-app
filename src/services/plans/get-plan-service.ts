import {selectPlanWhereId} from "@/db/plans/select-plan-where-id";

export async function getPlanService(id: number){
    try {
        console.log(`Selecionando plano pelo id ${id}...`)
        return await selectPlanWhereId(id);
    }catch (e){
        throw Error(`Erro no service de selecionar um plano pelo id.`, { cause: e })
    }
}