import React from "react";

import Menu from "../../components/Menu";
import Footer from "../../components/Footer";
import SosBrasil from "../../assets/sos-brasil.svg";

const Home = () => {
  return (
    <>
      <Menu />

      <div className="container">
        <p>
          O Brasil tem 3.299 espécies de animais e plantas ameaçadas, o que
          representa 19,8% do total de 16.645 espécies avaliadas. É o que aponta
          a pesquisa Contas de Ecossistemas: Espécies ameaçadas de extinção no
          Brasil 2014, divulgada hoje (5) pelo Instituto Brasileiro de Geografia
          e Estatística (IBGE).
        </p>

        <p>
          Atualmente, são reconhecidas no país 49.168 espécies de plantas e
          117.096 espécies de animais. Desse total, a pesquisa analisou as 4.617
          espécies da flora e as 12.262 espécies da fauna listadas pelo
          Instituto Chico Mendes de Conservação da Biodiversidade (ICMBio) e
          pelo Centro Nacional de Conservação da Flora do Jardim Botânico do Rio
          de Janeiro, para as quais existem informações sobre seu estado de
          conservação. Elas representam, respectivamente, 11,26% e 10,13% do
          total de espécies reconhecidas.
        </p>

        <p>
          Segundo o estudo, das espécies analisadas, 0,06% estão extintas, 0,01%
          estão extintas na natureza, 4,73% estão criticamente em perigo, 9,35%
          estão em perigo, 5,74% são vulneráveis, 3,98% estão quase ameaçadas de
          extinção, 62,82% são menos preocupantes e 13,33% foram classificadas
          como dados insuficientes, indicando a necessidade de mais pesquisas
          para avaliação. São consideradas ameaçadas as espécies nas categorias
          vulnerável, em perigo e criticamente em perigo.
        </p>

        <p className="right">Fonte: Instituto Chico Mendes</p>

        <img
          src={SosBrasil}
          alt="ilustracao com mapa do Brasil"
          width="200px"
          height="200px"
        />
      </div>

      <Footer />
    </>
  );
};

export default Home;
