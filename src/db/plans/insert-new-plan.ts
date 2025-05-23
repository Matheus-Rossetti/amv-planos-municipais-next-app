import { dbConnect, dbDisconnect } from "@/db/client";
import { Plan } from "@/models/plan-model"


export async function insertNewPlan(plan: Plan){
    const client = await dbConnect()

    try {
        const query = `
            INSERT INTO plans(created_by, name, description, city, start_date, end_date, version, starting_tab, preparation_tab, law_tab, goals_tab, library_tab, extra_tabs)
            VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13)
            `;
        const values = [
            plan.createdBy,
            plan.name,
            plan.description,
            plan.city,
            plan.startDate,
            plan.endDate,
            plan.version,
            JSON.stringify(plan.startingTab),
            JSON.stringify(plan.preparationTab),
            JSON.stringify(plan.lawTab),
            JSON.stringify(plan.goalsTab),
            JSON.stringify(plan.libraryTab),
            JSON.stringify(plan.extraTabs)
        ];
        await client.query(query, values);
        console.log(`Plano ${ plan.name } inserido com sucesso!`)
        await dbDisconnect(client);
    }catch (e) {
        await dbDisconnect(client);
        throw new Error(`Erro ao inserir o plano ${plan.name}.`, { cause: e } );
    }
}
