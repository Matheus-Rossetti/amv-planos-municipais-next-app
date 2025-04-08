import { insertNewUser } from "@/db/users/insert-new-user"
import { isEmail } from "@/utils/is-email";
import { hashPassword} from "@/utils/hash-password";

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

    //TODO: caso admin === true, verificar se o usuário que está criando o novo usuário é admin
    //TODO: como fazer isso? Não sei, provavelmente através de JWT
    //TODO: é mais por segurança, já que somente usuários admin podem acessar a página 'admin'
    //TODO: mas vai que algum maluco tenta enviar uma req alterando o id para um id de admin
    //TODO: então tenho que verificar se o admin em questão está autenticado com JWT

    password = await hashPassword(password);
    try {
        await insertNewUser({email: email, password: password, admin: admin, name: name, city: city})
    } catch (e){
        console.log("Erro: ", e);


        // @ts-expect-error - ts complains about e being undefined, but it will always be string
        throw new Error(e);
    }
    return
}