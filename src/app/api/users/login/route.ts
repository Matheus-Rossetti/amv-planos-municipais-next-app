import { NextResponse } from "next/server";
import { validApiKey } from "@/app/utils/valid-api-key";
import {loginService} from "@/app/services/users/login-service";

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

    loginService({email: email, password: '123456'})



}