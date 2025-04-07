import bcrypt from 'bcryptjs';


export async function compareHash(hashA: string, hashB: string): Promise<boolean> {
    return await bcrypt.compare(hashA, hashB);
}

