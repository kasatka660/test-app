import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { ReactComponent as AppleLogo } from "../../../../assets/images/logo/Apple_Logo.svg";
import "./IntroPageContent.scss";
import "../.././../../../node_modules/odometer/themes/odometer-theme-default.css";
import Odometer from "react-odometerjs";

const IntroPageContent: React.FC = () => {
  const [odometerValue, setOdometerValue] = useState<number>(0);
  const history = useHistory();
  const goToHomePage = () => {
    history.push("/");
  };
  useEffect(() => {
    setTimeout(() => setOdometerValue(2019), 1000);
  });
  return (
    <div className="IntroPageContent" onClick={goToHomePage}>
      <AppleLogo className="AppleLogo" />
      <p className="IntroPageText">New Products Coming This Summer</p>
      <h2 className="YearInfo">
        {" "}
        <Odometer value={odometerValue} format="d" />
      </h2>
    </div>
  );
};

export default IntroPageContent;
