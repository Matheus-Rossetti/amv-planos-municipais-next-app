import React, { Fragment } from "react";

const App = () => {
  return (
      <Fragment>
          <html>
          <body style={{ margin: 0 }}>
          <div style={{display: "flex", flexDirection: "row"}}>
          <div className="text-blue-300 p-5 w-[30vw] bg-black flex flex-col h-screen">
              <h1>Bem-vindo ao React!</h1>
              <p>Esta é uma página simples criada com React.</p>
          </div>
          <div style={{ backgroundColor: "lightblue", padding: "20px", width: "30vw", flexDirection: "column", height: "100vh" }}></div>
          </div>
          </body>
          </html>
      </Fragment>
  );
};

export default App;