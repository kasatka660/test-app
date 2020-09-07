import React from "react";
import "./Header.scss";
import { ReactComponent as AppleLogo } from "../../assets/images/logo/Apple_Logo-small.svg";

const Header: React.FC<{ displayNav?: boolean }> = ({ displayNav }) => {
  return (
    <header className={displayNav ? "HeaderWithNav" : "Header"}>
      <div className="Logo">
        <AppleLogo className="apple" />
      </div>
      <nav>
        <ul>
          <li>
            <a>iPhone</a>
          </li>
          <li>
            <a>MacBook Pro</a>
          </li>
          <li>
            <a>Watch</a>
          </li>
          <li>
            <button>Notify me</button>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
