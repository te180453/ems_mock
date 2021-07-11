import React from 'react';
import { HashRouter, Route,Switch } from "react-router-dom";
import { Typography } from "@material-ui/core";
import List from "./List";
import Create from "./Create";
import Edit from "./Edit";

const Router = () => {
  return (
    <HashRouter>
      <Switch>
        <Route exact path="/list">
          <List />
        </Route>
        <Route path="/list/edit">
          <Edit />
        </Route>
        <Route path="/list/create">
          <Create />
        </Route>
        <Route component={List} />
      </Switch>
    </HashRouter>
  );
}

export default Router;
