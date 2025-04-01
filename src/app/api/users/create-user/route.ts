import {createUserService} from '@/app/services/users/create-user-service'
import {NextResponse} from "next/server";

export async function POST(req: Request) {

    const body = await req.json();
    const {email, password, admin, name, city} = body;

    if (!email || !password || !admin || !name || !city) {
        return NextResponse.json({message: 'body deveria conter: email, password, admin, name e city'},
            {status: 400});
    } else {
        try {
            createUserService({email: email, password: password, admin: admin, name: name, city: city})
                .then(r => {
                    console.log(r);
                    return NextResponse.json({message: `Usuário ${name} criado com sucesso!`});
                });
        } catch (e) {
            NextResponse.json({message: 'Falha ao criar o usuário: ', e}, {status: 400});
        }
    }
}