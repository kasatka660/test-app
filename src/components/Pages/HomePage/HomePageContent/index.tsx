import React from "react";
import "./HomePageContent.scss";
import { ReactComponent as AppleLogo } from "../../../../assets/images/logo/Apple_Logo_gray.svg";
import { ReactComponent as IphoneIcon } from "../../../../assets/images/icons/Iphone_Icon.svg";
import { ReactComponent as AppleWatchIcon } from "../../../../assets/images/icons/Apple_Watch_Icon.svg";
import { ReactComponent as MacIcon } from "../../../../assets/images/icons/Mac_Icon.svg";
import { Link } from "react-router-dom";

const HomePageContent: React.FC = () => {
  return (
    <div className="HomePageContent">
      <h1>Welcome To Apple</h1>
      <AppleLogo className="AppleLogo" />
      <p className="HomePageText">
        <a>See our products</a>
      </p>
      <div className="ProductIcons">
        <Link to={"/home/iphone"}>
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

export default HomePageContent;
