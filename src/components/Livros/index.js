import React from "react";

import lista from "../../data/livros-animais-extincao.json";
import "./styles.css";

const Livros = () => {
  return (
    <div className="content">
      {lista.map((livro, index) => {
        return (
          <React.Fragment key={index}>
            <h2>{livro.categoria}</h2>

            <div className="livros">
              <div>
                <img src={livro.imagem} alt="imagem do livro" />
                <a href={livro.livro} rel="noreferrer" target="_blank">
                  <p>{`Volume ${livro.volume}`}</p>
                </a>
              </div>
            </div>
          </React.Fragment>
        );
      })}
    </div>
  );
};

export default Livros;
