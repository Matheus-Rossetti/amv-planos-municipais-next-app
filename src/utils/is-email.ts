
export function isEmail(email: string): boolean{
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // wtf
    return emailRegex.test(email);
}