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
        console.log("Conexão com o banco de dados estabelecida!");
        return client;
    } catch (e){
        throw new Error("Erro ao tentar conectar com o banco de dados", { cause: e });
    }
}

export async function dbDisconnect(client: PoolClient){
    try {
        client.release();
        console.log("Conexão com o banco de dados finalizada");
        return client;
    } catch (e){
        throw new Error("Erro ao tentar desconectar do banco de dados. ", { cause: e })
    }
}