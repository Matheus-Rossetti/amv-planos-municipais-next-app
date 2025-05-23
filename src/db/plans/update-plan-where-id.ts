import { dbConnect, dbDisconnect } from "@/db/client";
import {Plan} from "@/models/plan-model";

export async function updatePlanWhereId(plan: Plan){
    const client = await dbConnect()
    try{
        const query = `UPDATE plans SET 
                 name = $1,
                 description = $2,
                 start_date = $3,
                 end_date = $4,
                 starting_tab = $5,
                 preparation_tab = $6,
                 law_tab = $7,
                 goals_tab = $8,
                 library_tab = $9,
                 extra_tabs = $10 WHERE id = $11`;
        const values = [
            plan.name,
            plan.description,
            plan.startDate,
            plan.endDate,
            JSON.stringify(plan.startingTab),
            JSON.stringify(plan.preparationTab),
            JSON.stringify(plan.lawTab),
            JSON.stringify(plan.goalsTab),
            JSON.stringify(plan.libraryTab),
            JSON.stringify(plan.extraTabs),
            plan.id
        ];
        await client.query(query, values)
        await dbDisconnect(client)
    }catch (e){
        await dbDisconnect(client)
        throw new Error(`Erro ao atualizar plano pelo id${plan.id}`, { cause: e })
    }
}