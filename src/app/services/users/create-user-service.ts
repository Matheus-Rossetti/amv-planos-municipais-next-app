import { insertNewUser } from "@/app/db/users/insert-new-user"
import { isEmail } from "@/app/utils/is-email";
import { hashPassword} from "@/app/utils/hash-password";

interface Params{
    email: string;
    password: string;
    name: string;
    admin: boolean;
    city: string;
}

export async function createUserService({email, password, name, admin, city}: Params){

    const cities = [
        'Jaraguá do Sul',
        'Barra Velha',
        'Guaramirim',
        'Schoereder',
        'São João do Itaperiú',
        'Massaranduba',
        'Corupá',
    ]

    if (!isEmail(email)) throw new Error(`${email} não é um email`)
    if (!password) throw new Error('senha vazia')
    if (!cities.includes(city)) throw new Error(`${city} não é uma cidade válida`)
    if (name.length > 100) throw new Error('nome muito longo')

    password = await hashPassword(password);
    await insertNewUser({email: email, password: password, admin: admin, name: name, city: city})

    return
}