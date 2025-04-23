import {selectPlanWhereId} from "@/db/plans/select-plan-where-id";


async function a()
{
    const result = await selectPlanWhereId({id: 1})

    console.log(result);
}

a()