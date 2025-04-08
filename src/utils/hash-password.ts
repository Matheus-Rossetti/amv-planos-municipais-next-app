import bcrypt from 'bcryptjs';

export async function hashPassword(password: string): Promise<string>{
    const saltRounds = 10;

    // .hash retorna um promise, por isso é async
    return await bcrypt.hash(password, saltRounds);
}