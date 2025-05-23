import {dbConnect, dbDisconnect } from "@/db/client";

export async function selectPlansWhereCity(city: string) {
    const client = await dbConnect()
    try {
        const query = `
            SELECT id, name, description, start_date, end_date, archived FROM plans WHERE city = $1 
            `
        const values = [city];
        const result = await client.query(query, values);
        console.log(`Planos do município ${city} selecionados com sucesso!`)
        await dbDisconnect(client);
        return result.rows;
    }catch (e){
        await dbDisconnect(client)
        throw new Error(`Erro ao selecionar planos do município ${city}.`, { cause: e })
    }
}