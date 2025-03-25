import {dbConnect, dbDisconnect} from "@/app/db/client";
// TODO importar função de hash para senha

// Pega um usuário pelo email
export async function getUserByEmail(email: string){
    await dbConnect();
    console.log(email)
    // TODO adicionar query
    await dbDisconnect();
}

// Adiciona um usuário no banco de dados
export async function addUser(email: string, password: string, admin: boolean, name: string, city: string){
    await dbConnect();
    console.log(email, password, admin, name, city);
    // TODO hashar a senha e guardar o usuario no db
    await dbDisconnect();
}

// Pega todos os usuarios de um municipio
export async function getUsersByCity(city: string){
    await dbConnect();
    console.log(city);
    // TODO adicionar query
    await dbDisconnect();
}

// Atualiza a senha de um usuário no banco de dados
export async function updatePasswordByUserId(id: number, newPassword: string) {
    await dbConnect();
    console.log(id, newPassword);
    // TODO adicionar query
    await dbDisconnect();
}

// Atualiza um usuário no banco de dados
export async function updateUserById(id: number, name: string, email: string, city: string){
    await dbConnect();
    console.log(id, name, email, city);
    // TODO adicionar query
    await dbDisconnect();
}

// Deleta um usuário no banco de dados
export async function deleteUserById(id: number){
    await dbConnect();
    console.log(id)
    // TODO adicionar query
    await dbDisconnect();
}