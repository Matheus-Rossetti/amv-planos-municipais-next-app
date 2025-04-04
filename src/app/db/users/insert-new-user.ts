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
        await dbDisconnect();
    }catch (e){
        await dbDisconnect();
        // @ts-expect-error - ts complains about e being undefined, but it will always be string
        throw new Error("Não foi possível inserir o usuário no banco de dados", e.message);
    }
}