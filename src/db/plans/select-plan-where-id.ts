import {dbConnect, dbDisconnect } from "@/db/client";

export async function selectPlanWhereId(id: number) {
    const client = await dbConnect()
    // TODO trocar o * pelos campos exatos para montar um objeto Plan, usando '*' o db manda um monte de metadados que são inúteis nessa situação e adicionam overhead
    try {
        const query = `
            SELECT * FROM plans WHERE id = $1 
            `
        const values = [id];
        const result = await client.query(query, values);
        console.log(`Plano ${result.rows[0].name} selecionado com sucesso!`)
        await dbDisconnect(client);
        return result.rows[0];
    }catch (e){
        await dbDisconnect(client)
        throw new Error(`Erro ao selecionar o plano pelo id:${id}.`, { cause: e })
    }
}