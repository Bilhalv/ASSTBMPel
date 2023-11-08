import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import App from "./pages/App.jsx";
import Alugueis from "./pages/Alugueis.jsx";
import Convenios from "./pages/Convenios.jsx";
import Equipe from "./pages/Equipe.jsx";
import Esporte from "./pages/Esporte.jsx";
import Historico from "./pages/Historico.jsx";
import Locais from "./pages/Locais.jsx";
import NaoEncontrado from "./pages/404.jsx";
import '../dist/output.css'

ReactDOM.render(
  <Router>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/alugueis" element={<Alugueis />} />
      <Route path="/convenios" element={<Convenios />} />
      <Route path="/equipe" element={<Equipe />} />
      <Route path="/esporte" element={<Esporte />} />
      <Route path="/historico" element={<Historico />} />
      <Route path="/locais" element={<Locais />} />
      <Route path="*" element={<NaoEncontrado />} />
    </Routes>
  </Router>,
  document.getElementById('root')
);