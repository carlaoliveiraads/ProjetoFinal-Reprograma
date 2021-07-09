import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Home from "../pages/Home";
import AnimaisExtintos from "../pages/AnimaisExtintos";
import RiscoCritico from "../pages/RiscoCritico";

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/animais-extintos" component={AnimaisExtintos} />
        <Route path="/risco-critico" component={RiscoCritico} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
