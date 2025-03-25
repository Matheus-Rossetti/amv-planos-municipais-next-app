
// Checa se uma string começa ou termina com caractere especial
export function stopSqlInjection(input: unknown): boolean {
    if (typeof input !== 'string') {
        return false;
    }

    const specialChars = /[!@#$%^&*(),.?":{}|<>]/;
    return specialChars.test(input.charAt(0)) || specialChars.test(input.charAt(input.length - 1));
}