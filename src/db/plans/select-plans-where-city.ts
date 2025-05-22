import {dbConnect, dbDisconnect } from "@/db/client";

export async function selectPlansWhereCity(city: string) {
    const client = await dbConnect()

    try {
        const query = `
            SELECT id, name, description, start_date, end_date, archived FROM plans WHERE city = $1 
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