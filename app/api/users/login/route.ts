import { NextResponse } from "next/server";
import { validApiKey } from "@/utils/valid-api-key";
import { loginService } from "@/services/users/login-service";

// url/api/users/login
export async function POST(req: Request) {

    // ------ ERROR HANDLING ------

    // Verifica se a chave de API é válida
    if(!validApiKey(new URL(req.url).searchParams.get('apiKey')))
        return NextResponse.json({message: 'chave de api inválida'}, {status: 401});

    const { email, password } = await req.json()

    if (!email || !password) {
        return NextResponse.json({message: 'body deveria conter: email, password'}, {status: 400});
    }

    // ------ GETTING USER ------

    try {
        const token = await loginService({email: email, password: password});
        return NextResponse.json({message: 'Login efetuado com sucesso', token: token}, {status: 200});
    }catch (e){
        // @ts-expect-error - ts complains about 'e' being -undefined-, but 'e' is always -string-
        return NextResponse.json({message: `Erro: ${e.message}`}, {status: 500});
    }




}