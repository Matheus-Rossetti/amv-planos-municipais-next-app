import React, { Fragment } from "react";
import { TopBar } from "@/components/topbar";
import { PlanModel } from "@/models/plan-model";
import { Property } from "csstype";
import BackgroundColor = Property.BackgroundColor;
import {cityColor} from "@/utils/city-color";

const plan = new PlanModel({
    name: "Plano A",
    city: "Jaraguá do Sul",
    description: "Descrição do plano",
    validity: "2024-12-31",
    objective: "Objetivo Y",
    law: "Lei Z",
    status: "Ativo",
    extras:{
        "abas" : [
            {
                "nome": "aba 1",
                "conteudo": "conteudo 1"
            },
            {
                "nome": "aba 2",
                "conteudo": "conteudo 2"
            }
        ]
    }
});

const color: BackgroundColor = cityColor(plan.city)

const App = () => {
  return (
      <Fragment>
          <html>
          <body style={{ margin: 0 }}>
          <div style={{display: "flex", flexDirection: "column"}}>
              <TopBar planName={plan.name} color={color}/>
              <h1>Bem-vindo ao React!</h1>
              <p>Esta é uma página simples criada com React.</p>
          </div>
          </body>
          </html>
      </Fragment>
  );
};

export default App;