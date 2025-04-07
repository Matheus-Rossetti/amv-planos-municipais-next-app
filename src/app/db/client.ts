import {Pool, PoolClient} from 'pg';

const pool = new Pool({
    user: process.env.DB_USER,
    host: process.env.DB_HOST,
    database: process.env.DB,
    password: process.env.DB_PASSWORD,
    port: 5432,
    ssl: {
        rejectUnauthorized: false
    }
});

export async function dbConnect(){
    try {
        const client = await pool.connect();
        console.log("Conexão estabelecida");
        return client;
    } catch (e){
        console.log("Erro: ", e)
        // @ts-expect-error - ts complains about 'e' being -undefined-, but 'e' is always -string-
        throw new Error("A conexão com o banco de dados falhou", e.message);
    }
}

export async function dbDisconnect(client: PoolClient){
    try {
        client.release();
        console.log("Conexão finalizada");
        return client;
    } catch (e){
        console.log("Erro: ", e)
    }
}