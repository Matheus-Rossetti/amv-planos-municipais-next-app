import { selectUserByEmail } from "@/db/users/select-user-by-email";
import {compareHash} from "@/utils/compare_hash";
import {hashPassword} from "@/utils/hash-password";

interface UserParams {
    email: string;
    password: string;
}


export async function loginService({email, password}: UserParams) {

    const result = await selectUserByEmail({email: email})
    // selectUserByEmail returns an empty array if the user isn't found, therefore the need for the following check
    if(result.length == 0) throw new Error("Usuário não encontrado");

    const dbPassword = result[0].senha // ia codou isso aqui, cagou tudo

    const isRightPassword = await compareHash(password, dbPassword)

    if(!isRightPassword) throw new Error("Senha incorreta");

    const token = "Token Povisório"

    return token
}