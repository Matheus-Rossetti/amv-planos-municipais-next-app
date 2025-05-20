export class Plan {
    constructor(
        public id: number,
        public createdAt: string,
        public createdBy: number,
        public name: string,
        public description: string,
        public city: string,
        public startDate: number,
        public endDate: number,
        public archived: boolean,
        public version: number,
        public parentId: number | null,
        public lastModified: string,
        public startingTab: { [key: string]: unknown },
        public preparationTab: { [key: string]: unknown },
        public lawTab:  { [key: string]: unknown },
        public goalsTab: { [key: string]: unknown }, // metas
        public libraryTab: { [key: string]: unknown },
        public extraTabs: { [key: string]: unknown },
    ) {}
}