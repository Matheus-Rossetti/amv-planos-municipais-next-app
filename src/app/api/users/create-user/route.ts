import { createUserService } from '@/services/users/create-user-service'
import { NextResponse } from "next/server";
import { validApiKey } from "@/utils/valid-api-key";

// url/api/users/create-user
export async function POST(req: Request) {

    // ------ ERROR HANDLING ------

    // Verifica se a chave de API é válida
    if(!validApiKey(new URL(req.url).searchParams.get('apiKey')))
        return NextResponse.json({message: 'chave de api inválida'}, {status: 401});

    const { email, password, admin, name, city } = await req.json()

    if (!email || !password || !admin || !name || !city) {
        return NextResponse.json({message: 'body deveria conter: email, password, admin, name e city'},
            {status: 400});
    }

    // ------ CREATING USER ------

    try {
        await createUserService({email: email, password: password, admin: admin, name: name, city: city})
            .then(r => {console.log(r)})
                return NextResponse.json({message: `Usuário ${name} criado com sucesso!`});
    } catch (e) {
        // @ts-expect-error - ts complains about e being undefined, but it will always be string
        return NextResponse.json({message: 'Falha ao criar o usuário: ', error: e.message}, {status: 400});
    }
}