import {dbConnect, dbDisconnect } from "@/db/client";

export async function selectPlanWhereId(city: string) {
    const client = await dbConnect()

    try {
        const query = `
            SELECT * FROM plans WHERE city = $1 
            `
        const values = [city];
        const result = await client.query(query, values);
        await dbDisconnect(client);
        return result.rows;
    }catch (e){
        await dbDisconnect(client)
        console.log(e)
        // @ts-expect-error - ts complains about 'e' being -undefined-, but 'e' is always -string-
        throw new Error(e.message)
    }
}