import React from "react";
import "./App.scss";
import IntroPage from "./components/Pages/IntroPage";
import HomePage from "./components/Pages/HomePage";
import ProductPage from "./components/Pages/ProductPage";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import RequireLogin from "./router/RequireLogin";
import SignInPage from "./components/Pages/SignInPage";
import SignUpPage from "./components/Pages/SignUpPage";
import { createBrowserHistory } from "history";
import { Router } from "react-router";
const history = createBrowserHistory();

function App() {
  return (
    <Router history={history}>
      <Switch>
        <Route exact path="/signin">
          <div className="AppGradientWrapper">
            <SignInPage />
          </div>
        </Route>
        <Route exact path="/signup">
          <div className="AppGradientWrapper">
            <SignUpPage />
          </div>
        </Route>
        <Route path="/intro">
          <RequireLogin>
            <IntroPage />
          </RequireLogin>
        </Route>
        <Route path="/home/iphone">
          <ProductPage />
        </Route>
        <Route path="/home">
          <HomePage />
        </Route>
        <Route exact path="/">
          <RequireLogin>
            <IntroPage />
          </RequireLogin>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
