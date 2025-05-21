import { insertNewPlan } from "@/db/plans/insert-new-plan";
import {Plan} from "@/models/plan-model";

export async function createPlanService(plan: Plan){
    try {
        await insertNewPlan(plan)
    }catch (e){
        // @ts-expect-error - ts complains about e being undefined, but it will always be string
        throw new Error(e);
    }
}
