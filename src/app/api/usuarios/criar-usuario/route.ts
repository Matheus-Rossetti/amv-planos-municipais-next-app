import { NextApiRequest, NextApiResponse } from 'next';
import { addUser } from "@/app/db/users/user";
import {stopSqlInjection} from "@/app/utils/sql_injection_prevention";

export default function handler(req: NextApiRequest, res: NextApiResponse) {

    if (req.method === 'POST') {
        const { email, password, admin, name, city } = req.body;

        if(!email || !password || !admin || !name || !city){
            res.status(400).json({ message: 'Body should include email, password, admin, name and city' });
            return;
        }

        stopSqlInjection(req.body) // TODO isso não funciona pois envia o json inteiro, enviar parametro por parametro

        try {
            addUser(email, password, admin, name, city);
        }catch (e){
            res.status(400).json({ message: 'Failed to create user: ', e });
        }

        res.status(200).json({ message: 'GET request to /api/planos' });
    } else {
        res.status(405).json({ message: 'Method Not Allowed' });
    }
}