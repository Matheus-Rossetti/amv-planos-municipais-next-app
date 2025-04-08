import {dbConnect, dbDisconnect} from "@/app/db/client";


interface UserParams {
    email: string;
    password: string;
    admin: boolean;
    name: string;
    city: string;
}

export async function insertNewUser({email, password, admin, name, city}: UserParams){
    const client = await dbConnect();

    try {
        const query = `
            INSERT INTO usuarios (email, senha, admin, nome, municipio)
            VALUES ($1, $2, $3, $4, $5)
        `;
        const values = [email, password, admin, name, city];
        await client.query(query, values);
        await dbDisconnect(client);
    }catch (e){
        await dbDisconnect(client);
        // @ts-expect-error - ts complains about 'e' being -undefined-, but 'e' is always -string-
        console.log("AQUI ESTÁ O E.MESSAGE: ", e.message);
        // @ts-expect-error - ts complains about 'e' being -undefined-, but 'e' is always -string-
        throw new Error(`Não foi possível inserir o usuário no banco de dados: ${e.message}`);
    }
}