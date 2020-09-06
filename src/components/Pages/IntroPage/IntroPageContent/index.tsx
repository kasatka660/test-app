import React from "react";
import { ReactComponent as AppleLogo } from "../../../../assets/images/Apple_Logo.svg";
import "./IntroPageContent.scss";

const IntroPageContent: React.FC = () => {
  return (
    <div className="IntroPageContent">
      <AppleLogo className="AppleLogo" />
      <p className="IntroPageText">New Products Coming This Summer</p>
      <h2>2019</h2>
    </div>
  );
};

export default IntroPageContent;
