import React from "react";

import Menu from "../../components/Menu";
import Footer from "../../components/Footer";
import Animais from "../../components/Animais";

const AnimaisExtintos = () => {
  return (
    <>
      <Menu />

      <div className="container">
        <Animais />
      </div>

      <Footer />
    </>
  );
};

export default AnimaisExtintos;
