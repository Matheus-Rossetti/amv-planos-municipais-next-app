import { selectUserByEmail } from "@/app/db/users/select-user-by-email";

interface UserParams {
    email: string;
    password: string;
}


export async function loginService({email, password}: UserParams) {

    console.log(password)

    await selectUserByEmail({email: email})
    return
}