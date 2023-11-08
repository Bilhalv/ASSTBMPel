import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
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
    <Switch>
      <Route exact path="/" component={App} />
      <Route path="/alugueis" component={Alugueis} />
      <Route path="/convenios" component={Convenios} />
      <Route path="/equipe" component={Equipe} />
      <Route path="/esporte" component={Esporte} />
      <Route path="/historico" component={Historico} />
      <Route path="/locais" component={Locais} />
      <Route component={NaoEncontrado} />
    </Switch>
  </Router>,
  document.getElementById('root')
);