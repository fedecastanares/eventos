import React from "react";
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import { Router, Switch } from "react-router-dom";

import CardGlobal from "components/CardGlobal";

var hist = createBrowserHistory();

ReactDOM.render(
  <Router history={hist}>
    <Switch>
      <CardGlobal/>
    </Switch>
  </Router>,
  document.getElementById("root")
);

