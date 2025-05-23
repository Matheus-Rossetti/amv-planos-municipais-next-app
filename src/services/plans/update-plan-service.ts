import {updatePlanWhereId} from "@/db/plans/update-plan-where-id";
import {Plan} from "@/models/plan-model";

export async function updatePlanService(plan: Plan){

    // TODO por enquanto atualizar todos os campos do plano está ok.
    //  Futuramente, talvez valha a pena verificar o que mudou no plano e
    //  criar uma query para atualizar só o que foi a alterado

    try{
        console.log(`Atualizando plano ${plan.name}...`)
        // Envia o plano inteiro ao invés de só o id porque precisa dos outros dados para atualizar
        await updatePlanWhereId(plan)
    }catch (e) {
        throw new Error('Erro no service de atualizar um plano.', { cause: e })
    }
}