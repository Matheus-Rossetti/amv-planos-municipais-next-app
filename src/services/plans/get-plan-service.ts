import {selectPlanWhereId} from "@/db/plans/select-plan-where-id";

interface Params{
    id: number;
}


export async function getPlanService({id}: Params){




    return await selectPlanWhereId({id: id});
}