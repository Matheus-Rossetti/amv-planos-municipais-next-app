export type Plan = {
    id?: number
    createdAt?: string
    createdBy: number
    name: string
    description: string
    city: string
    startDate: number
    endDate: number
    archived?: boolean
    accepted?: boolean // Plano aceito e publicado para o público
    inProgress?: boolean // Plano ainda não terminado, durante o processo de inserção (Assim a pessoa pode salvar hoje e terminar amanhã
    version: number
    parentId?: number | null
    lastModified?: string
    startingTab: { [key: string]: unknown }
    preparationTab: { [key: string]: unknown }
    lawTab: { [key: string]: unknown }
    goalsTab: { [key: string]: unknown } // metas
    libraryTab: { [key: string]: unknown }
    extraTabs: [{ [key: string]: unknown }]
}