import React from "react";
import ReactDOM from "react-dom";
import "./index.sass";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Home from "./views/Home";
import Result from "./views/Result";
import { createMuiTheme, ThemeProvider } from "@material-ui/core";

//traduz o moment para pt-br
import ptbrmoment from "./pt-br";
ptbrmoment()

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#D93814",
    },
  }
});

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <Router>
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/resultado" exact>
            <Result />
          </Route>
        </Switch>
      </Router>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
