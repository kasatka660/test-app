import React from "react";
import SignIn from "./components/Authorization/SignIn";
import SignUp from "./components/Authorization/SignUp";
import "./App.scss";
import IntroPage from "./components/Pages/IntroPage";
import HomePage from "./components/Pages/HomePage";
import ProductPage from "./components/Pages/ProductPage";

function App() {
  return (
    <div className="App">
      <IntroPage />
    </div>
  );
}

export default App;
