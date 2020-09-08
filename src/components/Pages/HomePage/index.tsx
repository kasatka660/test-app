import React from "react";
import "./HomePage.scss";
import { ReactComponent as AppleLogo } from "../../../assets/images/logo/Apple_Logo_gray.svg";
import { ReactComponent as IphoneIcon } from "../../../assets/images/icons/Iphone_Icon.svg";
import { ReactComponent as AppleWatchIcon } from "../../../assets/images/icons/Apple_Watch_Icon.svg";
import { ReactComponent as MacIcon } from "../../../assets/images/icons/Mac_Icon.svg";
import { Link } from "react-router-dom";

const HomePage: React.FC = () => {
  return (
    <div className="HomePage">
      <h1>Welcome to Apple</h1>
      <AppleLogo className="AppleLogoHome" />
      <p className="HomePageText">
        <Link to="/products/iphone">See our products</Link>
      </p>
      <div className="ProductIcons">
        <Link to={"/products/iphone"}>
          <IphoneIcon />
        </Link>
        <a>
          <MacIcon />
        </a>
        <a>
          <AppleWatchIcon />
        </a>
      </div>
    </div>
  );
};

export default HomePage;
