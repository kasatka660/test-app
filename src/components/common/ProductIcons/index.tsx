import React from "react";
import { NavLink } from "react-router-dom";
import "./ProductIcons.scss";
import { ReactComponent as IphoneIcon } from "../../../assets/images/icons/Iphone_Icon.svg";
import { ReactComponent as MacIcon } from "../../../assets/images/icons/Mac_Icon.svg";
import { ReactComponent as AppleWatchIcon } from "../../../assets/images/icons/Apple_Watch_Icon.svg";

const ProductIcons: React.FC = () => {
  return (
    <div className="ProductIcons">
      <NavLink to={"/products/iphone"} activeClassName="IconActive">
        <IphoneIcon />
      </NavLink>
      <NavLink to="/">
        <MacIcon />
      </NavLink>
      <NavLink to="/">
        <AppleWatchIcon />
      </NavLink>
    </div>
  );
};

export default ProductIcons;
