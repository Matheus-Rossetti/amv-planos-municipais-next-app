import {dbConnect, dbDisconnect} from "@/db/client";

interface UserParams {
    email: string;
}

export async function selectUserByEmail({email}: UserParams){
    const client = await dbConnect();

    try {
        const query = `
            SELECT id, created_at, nome, email, senha, admin, municipio FROM usuarios WHERE email = $1
        `;
        const values = [email];
        const result = await client.query(query, values);
        await dbDisconnect(client);

        return result.rows;
    }catch (e){
        console.log("Erro: ", e);
        await dbDisconnect(client);
        // @ts-expect-error - ts complains about 'e' being -undefined-, but 'e' is always -string-
        throw new Error(`Erro: ${e.message}`);
    }

}


