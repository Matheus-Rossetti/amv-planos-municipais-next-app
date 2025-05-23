import {selectPlansWhereCity} from "@/db/plans/select-plans-where-city";

export async function getPlansService(city: string){
    try {
        console.log(`Selecionando planos do município ${city}...`)
        return await selectPlansWhereCity(city);
    }catch (e){
        throw Error(`Erro no service de pegar os planos de um município.`, { cause: e })
    }
}