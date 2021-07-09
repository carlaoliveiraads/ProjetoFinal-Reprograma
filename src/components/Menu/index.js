import React from "react";
import { Link } from "react-router-dom";

import "./styles.css";

const Menu = () => {
  return (
    <div className="nav">
      <h1>SOS Animais do Brasil</h1>

      <ul className="menu">
        <li>
          <Link className="link" to="/">
            Home
          </Link>
        </li>

        <li>
          <Link className="link" to="/animais-extintos">
            Animais Extintos
          </Link>
        </li>

        <li>
          <Link className="link" to="/risco-critico">
            Risco Crítico
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Menu;
