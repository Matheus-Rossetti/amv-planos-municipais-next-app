import {createUserService} from '@/app/services/users/create-user-service'
import {NextResponse} from "next/server";
import {validApiKey} from "@/app/utils/valid-api-key";

export async function POST(req: Request) {

    const { searchParams } = new URL(req.url);
    const apiKey = searchParams.get('apiKey');

    // ------ ERROR HANDLING ------

    if(!validApiKey(apiKey)) return NextResponse.json({message: 'chave de api inválida'}, {status: 401});

    const body = await req.json().catch(() => "");
    const {email, password, admin, name, city} = body; // Can't get parameter is the catch above == null

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