import {selectPlansWhereCity} from "@/db/plans/select-plans-where-city";

export async function getPlansService(city: string){
    try {
        return await selectPlansWhereCity(city);
    }catch (e){
        //@ts-expect-error cala boca TS, meu deus
        throw Error(`Service error: ${e.message}`)
    }
}