import React from "react";
import { TopBar } from "@/components/topbar";
import { Property } from "csstype";
import BackgroundColor = Property.BackgroundColor;
import {cityColor} from "@/utils/city-color";

// const plan



export default async function PlanPage() {

    const res = await fetch(`http://localhost:3000/api/plans/get-plan?id=1`);
    const plan = await res.json();
    console.log(`AQUI O PLANO: ${plan['']}`) // TODO não está recebendo corretamente, acho, debugar no postman

    const color: BackgroundColor = cityColor(plan["city"]);

    return (
        <html>
        <body>
        <div>
            <TopBar planName={plan.name} color={color} />
            <h1>Bem-vindo ao React!</h1>
            <p>Esta é a página do plano {plan.name}</p>
        </div>
        </body>
        </html>
    );
}