//Importa as bibliotecas
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

//Importa o app.js
import App from "./App";

//Importa a div root do index.html
const rootElement = document.getElementById("root");
//Cria um elemento root a partir do root do index.html
const root = createRoot(rootElement);
//Faz a renderização da página html
root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
