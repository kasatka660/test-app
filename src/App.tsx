import React, { useEffect, useState } from "react";
import "./App.scss";
import IntroPage from "./components/Pages/IntroPage";
import HomePage from "./components/Pages/HomePage";
import ProductPage from "./components/Pages/ProductPage";
import RequireLogin from "./router/RequireLogin";
import SignInPage from "./components/Pages/SignInPage";
import SignUpPage from "./components/Pages/SignUpPage";
import { Switch, Route } from "react-router";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import { useLocation } from "react-router-dom";
import Header from "./components/Header";

const App: React.FC = () => {
  const location = useLocation();

  return (
    <>
      <TransitionGroup className="transition-group">
        <>
          <Switch location={location}>
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
          </Switch>
          <div className="TransitionWrapper">
            <Switch>
              <Route path="/intro">
                <RequireLogin>
                  <Header displayNav={false} />
                  <CSSTransition
                    key={location.key}
                    timeout={1500}
                    classNames={"fade"}
                  >
                    <div className="ContentWrapper">
                      <IntroPage />
                    </div>
                  </CSSTransition>
                </RequireLogin>
              </Route>
              <Route path="/products/iphone">
                <RequireLogin>
                  <Header displayNav={true} />
                  <CSSTransition
                    key={location.key}
                    timeout={1500}
                    classNames={"fade"}
                  >
                    <div className="ContentWrapper">
                      <ProductPage />
                    </div>
                  </CSSTransition>
                </RequireLogin>
              </Route>
              <Route exact path="/">
                <RequireLogin>
                  <Header displayNav={true} />
                  <CSSTransition
                    key={location.key}
                    timeout={1500}
                    classNames={"fade"}
                  >
                    <div className="ContentWrapper">
                      <HomePage />
                    </div>
                  </CSSTransition>
                </RequireLogin>
              </Route>
            </Switch>
          </div>
        </>
      </TransitionGroup>
    </>
  );
};

export default App;
