import { insertNewUser } from "@/app/db/users/insert-new-user";

insertNewUser({
    email: "teste@gmail.com",
    password: "123456",
    admin: true,
    name: "Teste",
    city: "Jaraguá do Sul"
}).then(r => console.log(r))