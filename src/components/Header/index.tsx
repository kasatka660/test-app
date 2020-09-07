import React from "react";
import "./Header.scss";
import { ReactComponent as AppleLogo } from "../../assets/images/logo/Apple_Logo-small.svg";
import { Link } from "react-router-dom";

const Header: React.FC<{ displayNav?: boolean }> = ({ displayNav }) => {
  return (
    <header className={displayNav ? "HeaderWithNav" : "Header"}>
      <div className="Logo">
        <AppleLogo className="apple" />
      </div>
      <nav className="Navigation">
        <ul>
          <li className="NavItem">
            <Link className="NavLink" to={"/home/iphone"}>
              iPhone
            </Link>
          </li>
          <li className="NavItem">
            <a className="NavLink">MacBook Pro</a>
          </li>
          <li className="NavItem">
            <a className="NavLink">Watch</a>
          </li>
          <li className="NavItem NavBtn">
            <a className="NavLink">Notify me</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
