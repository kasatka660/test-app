import React, { useState } from "react";
import "./Header.scss";
import { ReactComponent as AppleLogo } from "../../assets/images/logo/Apple_Logo-small.svg";
import { Link, NavLink } from "react-router-dom";

const Header: React.FC<{ displayNav?: boolean }> = ({ displayNav }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  return (
    <header className={displayNav ? "HeaderWithNav" : "Header"}>
      <div className="Logo">
        <Link to="/">
          <AppleLogo className="LogoImage" />
        </Link>
      </div>
      {displayNav && (
        <span
          className={"Toggle" + (isOpen ? " open" : "")}
          onClick={() => setIsOpen(!isOpen)}
        >
          <hr />
          <hr />
          <hr />
        </span>
      )}
      <nav className={"Navigation" + (!isOpen ? " hidden" : "")}>
        <ul>
          <li className="NavItem">
            <NavLink
              className="NavLink"
              to={"/products/iphone"}
              activeClassName="NavLinkActive"
            >
              iPhone
            </NavLink>
          </li>
          <li className="NavItem">
            <a href="/" className="NavLink">
              MacBook Pro
            </a>
          </li>
          <li className="NavItem">
            <a href="/" className="NavLink">
              Watch
            </a>
          </li>
          <li className="NavItem NavBtn">
            <a href="/" className="NavLink">
              Notify me
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
