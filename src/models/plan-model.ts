export class Plan {
    constructor(
        public id: number,
        public creationAt: string,
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

// Plan fields are only fix information and tab, information inside the tabs are modular

// startingTab {
//      containers: [
//          {
//              containerType: "text",
//              containerName: "Descrição",
//              containerContent: [],
//          }
//          {
//              containerType: "text",
//              containerName: "Objetivos",
//              containerContent: [],
//          }
//          {
//              containerType: "text",
//              containerName: "Base legal",
//              containerContent: [],
//          }
//      ]
// }

// preparationsTab {
//      containers: [
//          {
//              containerType: "",
//              containerContent: [],
//          }
//      ]
//}

// lawTab {
//      text: link,
//      text: link,
//}

// libraryTab {
//      text: link,
//      text: link,
//}

// extraTabs [
//      {
//          tabName: 'text',
//          containers: [
//              {
//                  containerType: "",
//                  containerName: "",
//                  containerContent: [],
//              }
//              {
//                  containerType: "",
//                  containerName: "",
//                  containerContent: [],
//              }
//          ]
//      }
//      {
//          tabName: 'text',
//          containers: [
//              {
//                  containerType: "",
//                  containerName: "",
//                  containerContent: [],
//              }
//              {
//                  containerType: "",
//                  containerName: "",
//                  containerContent: [],
//              }
//          ]
//      }
//]