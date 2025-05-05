export class Plan {
    constructor(
        public id: number,
        public name: string,
        public description: string,
        public city: string,
        public startDate: number,
        public endDate: number,
        public archived: boolean,
        public version: number,
        public parentId: number | null,
        public startingTab: { [key: string]: unknown },
        public preparationTab: { [key: string]: unknown },
        public goalsTab: { [key: string]: unknown }, // metas
        public extraTabs: { [key: string]: unknown }, // map/json

    ) {

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

// Plan fields are only fix information, modular information

// startingTab {
//      description: text,
//      objectives: {},
//      legalBase: text,
// }