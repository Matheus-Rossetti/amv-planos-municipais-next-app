import {dbConnect, dbDisconnect} from "@/app/db/client";

// Adiciona um plano no banco de dados
export async function addPlan(){
    await dbConnect();
    // TODO adicionar query
    await dbDisconnect();
}

// Pega um plano especifico do banco de dados
export async function getPlanById(id: number){
    await dbConnect();
    console.log(id)
    // TODO adicionar query
    await dbDisconnect();
}

// Pega todos os planos no banco de dados
export async function getAllPlans(){
    await dbConnect();
    // TODO adicionar query
    await dbDisconnect();
}

// Pega todos os planos de um município específico
export async function getAllPlansByCity(city: string){
    await dbConnect();
    console.log(city);
    // TODO adicionar query
    await dbDisconnect();
}

// Atualiza um plano no banco de dados
export async function updatePlan(id: number){
    await dbConnect();
    console.log(id);
    // TODO adicionar query
    await dbDisconnect();
}

// Delete um plano do banco de dados
export async function deletePlanById(id: number){
    await dbConnect();
    console.log(id)
    // TODO adicionar query
    await dbDisconnect();
}