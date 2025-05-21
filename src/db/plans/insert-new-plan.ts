import { dbConnect, dbDisconnect } from "@/db/client";
import { Plan } from "@/models/plan-model"


export async function insertNewPlan(plan: Plan){
    const client = await dbConnect()

    try {
        const query = `
            INSERT INTO plans(created_by, name, description, city, start_date, end_date, version, starting_tab, preparation_tab, law_tab, goals_tab, library_tab, extra_tabs)
            VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13)
            `;
        const values = [plan.createdBy, plan.name, plan.description, plan.city, plan.startDate, plan.endDate, plan.version, plan.startingTab, plan.preparationTab, plan.lawTab, plan.goalsTab, plan.libraryTab, plan.extraTabs];
        await client.query(query, values);
        await dbDisconnect(client);
    }catch (e) {
        await dbDisconnect(client);
        // @ts-expect-error - ts complains about 'e' being -undefined-, but 'e' is always -string-
        throw new Error(`Não foi possível inserir o usuário no banco de dados: ${e.message}`);
    }

}
