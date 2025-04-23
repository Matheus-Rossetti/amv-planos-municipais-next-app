interface Params {
    name: string;
    description: string;
    validity: string;
    objective: string;
    law: string;
    status: string;
    extras: { [key: string]: unknown }
}

export class PlanModel {
    name: string;
    description: string;
    validity: string;
    objective: string;
    law: string;
    status: string;
    extras: { [key: string]: unknown };

    constructor({ name, description, validity, objective, law, status, extras}: Params) {
        this.name = name;
        this.description = description;
        this.validity = validity;
        this.objective = objective;
        this.law = law;
        this.status = status;
        this.extras = extras;
    }
}

const plan = new PlanModel({
    name: "Plano A",
    description: "Descrição do plano",
    validity: "2024-12-31",
    objective: "Objetivo Y",
    law: "Lei Z",
    status: "Ativo",
    extras:{
        "abas" : [
            {
                "nome": "aba 1",
                "conteudo": "conteudo 1"
            },
            {
                "nome": "aba 2",
                "conteudo": "conteudo 2"
            }
        ]
    }
});

console.log(plan);
