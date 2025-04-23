interface Params {
    name: string;
    description: string;
    city: string;
    validity: string;
    objective: string;
    law: string;
    status: string;
    extras: { [key: string]: unknown }
}

export class PlanModel {
    name: string;
    description: string;
    city: string;
    validity: string;
    objective: string;
    law: string;
    status: string;
    extras: { [key: string]: unknown };

    constructor({ name, description, validity, objective, law, status, extras, city}: Params) {
        this.name = name;
        this.description = description;
        this.city = city;
        this.validity = validity;
        this.objective = objective;
        this.law = law;
        this.status = status;
        this.extras = extras;
    }

}
