import { insertNewPlan } from "@/db/plans/insert-new-plan";


interface Params {
    user: number,
    planName: string,
    description: string,
    validity: string,
    authority: string,
    objective: string,
    law: string,
    status: string,
}

export async function createPlanService({user, planName, description, validity, authority, objective, law, status}: Params) {

    try {
        await insertNewPlan({user: user, planName: planName, description: description, validity: validity, authority: authority, objective: objective, law: law, status: status})
    }catch (e) {
        // @ts-expect-error  - ts complains about 'e' being -undefined-, but 'e' is always -string-
        throw new Error("Erro: ", e);
    }

}