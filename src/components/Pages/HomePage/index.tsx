import React from "react";
import "./HomePage.scss";
import { ReactComponent as AppleLogo } from "../../../assets/images/logo/Apple_Logo_gray.svg";
import { Link } from "react-router-dom";
import ProductIcons from "../../common/ProductIcons";

const HomePage: React.FC = () => {
  return (
    <div className="HomePage">
      <h1>Welcome to Apple</h1>
      <AppleLogo className="AppleLogoHome" />
      <p className="HomePageText">
        <Link to="/products/iphone">See our products</Link>
      </p>
      <ProductIcons />
    </div>
  );
};

export default HomePage;
