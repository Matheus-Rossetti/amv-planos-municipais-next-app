import {dbConnect, dbDisconnect } from "@/db/client";

interface Params {
    id: number;
}

export async function selectPlanWhereId({id}: Params) {
    const client = await dbConnect()

    try {
        const query = `
            SELECT * FROM planos WHERE id = $1
            `
        const values = [id];
        const result = await client.query(query, values);
        await dbDisconnect(client);

        return result.rows[0];
    }catch (e){
        await dbDisconnect(client)
        console.log(e)
        // @ts-expect-error - ts complains about 'e' being -undefined-, but 'e' is always -string-
        throw new Error(e.message)
    }

}