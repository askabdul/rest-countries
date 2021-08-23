import React, {useEffect} from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { MainApp } from "./../app/components/main-app";
import { CountryDetails } from "./components/main-app/country";
import { LogIn } from "./components/auth/login";
import { SignUpPage } from "./components/auth/signup";
import { PrivateRoute } from "./routes";
import "element-theme-default";

export const App = (props) => {

  useEffect(() => {
    console.log(props);
  })
  return (
    <Router>
      {/* <Navbar /> */}
      <Switch>
        <PrivateRoute exact path="/">
          <MainApp />
        </PrivateRoute>
        <Route path="/countries/:id">
          <CountryDetails />
        </Route>
        <Route path='/login'>
          <LogIn />
        </Route>
        <Route path='/signup'>
          <SignUpPage />
        </Route>
      </Switch>
    </Router>
  );
};
