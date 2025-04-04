import { Client } from 'pg';

const client = new Client({
    user: 'M7Zp5PvIxi32q30tH9zTQ',
    host: 'projetos-municipais-postgres-db.postgres.database.azure.com',
    database: 'postgres',
    password: "6&8;GF8c9V5K]Y:wXd_vD|%j\'*MaVI",
    port: 5432,
    ssl: {
        rejectUnauthorized: false
    }
});

export async function dbConnect(){
    try {
        await client.connect();
        console.log("Conexão estabelecida");
        return client;
    } catch (e){
        console.log("Erro: ", e)
        // @ts-expect-error - ts complains about e being undefined, but it will always be string
        throw new Error("A conexão com o banco de dados falhou", e.message);
    }
}

export async function dbDisconnect(){
    try {
        await client.end();
        console.log("Conexão finalizada");
        return client;
    } catch (e){
        console.log("Erro: ", e)
    }
}