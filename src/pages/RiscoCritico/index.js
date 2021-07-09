import React from "react";

import Menu from "../../components/Menu";
import Footer from "../../components/Footer";
import Livros from "../../components/Livros";

const RiscoCritico = () => {
  return (
    <>
      <Menu />

      <div className="container">
        <Livros />
      </div>

      <Footer />
    </>
  );
};

export default RiscoCritico;
