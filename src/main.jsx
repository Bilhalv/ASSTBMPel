import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./pages/App.jsx";
import Alugueis from "./pages/Alugueis.jsx";
import Convenios from "./pages/Convenios.jsx";
import Equipe from "./pages/Equipe.jsx";
import Esporte from "./pages/Esporte.jsx";
import Historico from "./pages/Historico.jsx";
import Locais from "./pages/Locais.jsx";
import NaoEncontrado from "./pages/404.jsx";
import '../dist/output.css'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/alugueis",
    element: <Alugueis />,
  },
  {
    path: "/convenios",
    element: <Convenios />,
  },
  {
    path: "/equipe",
    element: <Equipe />,
  },
  {
    path: "/esportes",
    element: <Esporte />,
  },
  {
    path: "/historico",
    element: <Historico />,
  },
  {
    path: "/locais",
    element: <Locais />,
  },
  {
    path: "/*",
    element: <NaoEncontrado />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
