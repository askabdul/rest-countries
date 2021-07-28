import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { MainApp } from "./../app/components/main-app";
import { CountryDetails } from "./components/main-app/country";
import { Navbar } from "./components/navigation/navbar";
import "element-theme-default";

export const App = () => {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/">
          <MainApp />
        </Route>
        <Route path="/countries/:id">
          <CountryDetails />
        </Route>
      </Switch>
    </Router>
  );
};
