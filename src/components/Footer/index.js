import React from "react";

import Github from "../../assets/github.gif";
import Linkedin from "../../assets/linkedin.gif";
import Instagram from "../../assets/instagram.gif";

import "./styles.css";

const Footer = () => {
  return (
    <footer className="rodape">
      <div className="rodape-principal">
        <div className="redes-socias">
          <a
            href="https://github.com/carlaoliveiraads"
            rel="noreferrer"
            target="_blank"
          >
            <img className="redes" src={Github} alt="Ícone do GitHub" />
          </a>
          <a
            href="https://www.linkedin.com/in/carla-oliveira-ads/"
            rel="noreferrer"
            target="_blank"
          >
            <img className="redes" src={Linkedin} alt="Ícone do LinkedIn" />
          </a>
          <a
            href="https://www.instagram.com/carlynnha/"
            rel="noreferrer"
            target="_blank"
          >
            <img className="redes" src={Instagram} alt="Ícone do Instagram" />
          </a>
        </div>
      </div>

      <div className="rodape-texto">
        <p>{`Carla Oliveira Silva - {Reprograma} 2021`}</p>
      </div>
    </footer>
  );
};

export default Footer;
