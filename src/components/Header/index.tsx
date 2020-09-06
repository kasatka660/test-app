import React from "react";
import "./Header.scss";

const Header: React.FC = () => {
  return (
    <header className="Header">
      <div className="Logo"></div>
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
