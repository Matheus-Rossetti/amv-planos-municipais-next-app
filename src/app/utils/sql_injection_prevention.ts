export function stopSqlInjection(body){

    const specialChars = /[!@#$%^&*(),.?":{}|<>']/;



    for (const key in body) {
        specialChars.test(key.charAt(0)) || specialChars.test(key.charAt(key.length - 1));
    }



    return
}