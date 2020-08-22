import React from "react";
import JuroComposto from "./components/jurocomposto.js";

export default function App() {
  return (
    <div>
      <h1 style={{ textAlign: "center" }}>React - Juros Compostos</h1>

      <JuroComposto montanteInicial={""} taxaJuros={""} meses={""} />
    </div>
  );
}
