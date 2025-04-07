import { selectUserByEmail } from "@/app/db/users/select-user-by-email";

interface UserParams {
    email: string;
    password: string;
}


export async function loginService({email, password}: UserParams) {

    const result = await selectUserByEmail({email: email})

    if(result.length == 0) throw new Error("Usuário não encontrado");

    return result
}