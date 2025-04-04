
export function validApiKey(key: string | null): boolean {

    const temp_key = "chavecompletamentealeatoriaconfia";

    // TODO criar um gerador de chaves, hashar ela e guardar no db
    //  ou num chache e depois comprar hashes

    // retorna true ou false
    return key === temp_key;
}