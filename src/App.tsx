import React, { useRef } from "react";
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
  // Seehttps://github.com/reactjs/react-transition-group/blob/master/CHANGELOG.md for references.
  const introPageRef = useRef(null);
  const homePageRef = useRef(null);
  const productPageRef = useRef(null);

  return (
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
        <Route key="/intro" exact path="/intro">
          <Header displayNav={false} />
        </Route>
        <Route key="/home" path="/">
          <Header displayNav={true} />
        </Route>
      </Switch>
      <TransitionGroup>
        <Route key="/intro" exact path="/intro">
          {({ match }) => (
            <RequireLogin>
              <CSSTransition
                in={match != null}
                timeout={1500}
                classNames={"fade"}
                nodeRef={introPageRef}
                unmountOnExit
              >
                <div ref={introPageRef} className="PageWrapper">
                  <IntroPage />
                </div>
              </CSSTransition>
            </RequireLogin>
          )}
        </Route>
        <Route key="/iphone" exact path="/products/iphone">
          {({ match }) => (
            <RequireLogin>
              <CSSTransition
                in={match != null}
                timeout={1500}
                nodeRef={productPageRef}
                classNames={"slidedown"}
                unmountOnExit
              >
                <div ref={productPageRef} className="PageWrapper">
                  <ProductPage />
                </div>
              </CSSTransition>
            </RequireLogin>
          )}
        </Route>
        <Route key="/home" exact path="/">
          {({ match }) => (
            <RequireLogin>
              <CSSTransition
                in={match != null}
                timeout={1500}
                nodeRef={homePageRef}
                classNames={"fade"}
                unmountOnExit
              >
                <div ref={homePageRef} className="PageWrapper">
                  <HomePage />
                </div>
              </CSSTransition>
            </RequireLogin>
          )}
        </Route>
      </TransitionGroup>
    </>
  );
};

export default App;
