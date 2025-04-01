import {dbConnect, dbDisconnect} from "@/app/db/client";


interface UserParams {
    email: string;
}

export async function selectUserByEmail({email}: UserParams){
    const client = await dbConnect();

    try {
        const query = `
            SELECT * FROM usuarios WHERE email = $1
        `;
        const values = [email];
        const result = await client.query(query, values);
        await dbDisconnect();
        if (result.rows.length > 0){
            console.log("Usuario encontrado: ", result.rows[0]);
            return result.rows[0];
        }else {
            console.log("Usuario não encontrado");
        }
    }catch (e){
        console.log("Erro: ", e);
        await dbDisconnect();
        throw new Error("Erro ao encontrar usuario");
    }

}


