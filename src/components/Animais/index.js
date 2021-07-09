import React from "react";

import lista from "../../data/animais-extintos.json";
import "./styles.css";

const Animais = () => {
  const aves = lista.filter((item) =>
    item.classe.toLowerCase().includes("aves")
  );

  const mamiferos = lista.filter((item) =>
    item.classe.toLowerCase().includes("mamíferos")
  );

  const anfibios = lista.filter((item) =>
    item.classe.toLowerCase().includes("anfíbios")
  );

  const peixes = lista.filter((item) =>
    item.classe.toLowerCase().includes("peixes")
  );

  return (
    <div className="content">
      <h2>Aves</h2>
      {aves.map((animal, index) => (
        <div className="classes" key={index}>
          <div className="texto">
            <img src={animal.imagem} alt="imagem do livro" />
            <p>{animal.nome}</p>
            <p>
              <strong>Região: </strong>
              {animal.regiao}
            </p>
            <p>
              <strong>Possível causa de extinção: </strong>
              {animal.possivelCausaExtincao}
            </p>
            <p>
              <strong>Última vez visto: </strong>
              {animal.ultimaVezVisto}
            </p>
          </div>
        </div>
      ))}

      <h2 className="nova-classe">Mamíferos</h2>
      {mamiferos.map((animal, index) => (
        <div className="classes" key={index}>
          <div>
            <img src={animal.imagem} alt="imagem do livro" />
            <p>{animal.nome}</p>
            <p>
              <strong>Região: </strong>
              {animal.regiao}
            </p>
            <p>
              <strong>Possível causa de extinção: </strong>
              {animal.possivelCausaExtincao}
            </p>
            <p>
              <strong>Última vez visto: </strong>
              {animal.ultimaVezVisto}
            </p>
          </div>
        </div>
      ))}

      <h2 className="nova-classe">Anfíbios</h2>
      {anfibios.map((animal, index) => (
        <div className="classes" key={index}>
          <div>
            <img src={animal.imagem} alt="imagem do livro" />
            <p>{animal.nome}</p>
            <p>
              <strong>Região: </strong>
              {animal.regiao}
            </p>
            <p>
              <strong>Possível causa de extinção: </strong>
              {animal.possivelCausaExtincao}
            </p>
            <p>
              <strong>Última vez visto: </strong>
              {animal.ultimaVezVisto}
            </p>
          </div>
        </div>
      ))}

      <h2 className="nova-classe">Peixes</h2>
      {peixes.map((animal, index) => (
        <div className="classes" key={index}>
          <div>
            <img src={animal.imagem} alt="imagem do livro" />
            <p>{animal.nome}</p>
            <p>
              <strong>Região: </strong>
              {animal.regiao}
            </p>
            <p>
              <strong>Possível causa de extinção: </strong>
              {animal.possivelCausaExtincao}
            </p>
            <p>
              <strong>Última vez visto: </strong>
              {animal.ultimaVezVisto}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Animais;
