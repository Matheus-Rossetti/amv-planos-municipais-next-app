import { selectUserByEmail } from "@/app/db/users/select-user-by-email";
import {hashPassword} from "@/app/utils/hash-password";
import {compareHash} from "@/app/utils/compare_hash";

interface UserParams {
    email: string;
    password: string;
}


export async function loginService({email, password}: UserParams) {

    const result = await selectUserByEmail({email: email})

    if(result.length == 0) throw new Error("Usuário não encontrado");

    const dbPassword = result[0].senha

    // TODO deverias estar retornando true se a senha estiver correta, mas retorna false mesmo assim
    if(!await compareHash(dbPassword, password)) throw new Error("Senha incorreta");

    const token = "Token Povisório"

    return token
}