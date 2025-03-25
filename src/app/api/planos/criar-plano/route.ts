import { NextApiRequest, NextApiResponse } from 'next';


export default function handler(req: NextApiRequest, res: NextApiResponse) {



    if (req.method === 'GET') {
        res.status(200).json({ message: 'GET request to /api/planos' });
    } else if (req.method === 'POST') {
        res.status(201).json({ message: 'POST request to /api/planos' });
    } else {
        res.status(405).json({ message: 'Method Not Allowed' });
    }
}