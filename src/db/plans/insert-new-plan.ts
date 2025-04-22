import { dbConnect, dbDisconnect } from "@/db/client";

interface Params {
    user: number,
    planName: string,
    description: string,
    validity: string,
    authority: string,
    objective: string,
    law: string,
    status: string,
}

export async function insertNewPlan({user, planName, description, validity, authority, objective, law, status}: Params){
    const client = await dbConnect()

    try {
        const query = `
            INSERT INTO planos (usuario, nome, descricao, vigencia, responsavel, objetivo, legislacao, status)
            VALUES ($1, $2, $3, $4, $5, $6, $7, $8)
            `;
        const values = [user, planName, description, validity, authority, objective, law, status];
        await client.query(query, values);
        await dbDisconnect(client);
    }catch (e) {
        await dbDisconnect(client);
        // @ts-expect-error - ts complains about 'e' being -undefined-, but 'e' is always -string-
        throw new Error(`Não foi possível inserir o usuário no banco de dados: ${e.message}`);
    }

}