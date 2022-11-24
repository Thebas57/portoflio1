import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const Skill = () => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1124, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 800, min: 0 },
      items: 1,
    },
  };

  return (
    <div className="skill-container">
      <div className="skill">
        <h1>Compétences</h1>
        <p>
          Le lorem ipsum est, en imprimerie, une suite de mots sans
          signification utilisée à titre provisoire pour calibrer une mise en
          page, le texte définitif venant remplacer le faux-texte dès qu'il est
          prêt.
        </p>
        <Carousel partialVisible={true} responsive={responsive} infinite={true}>
          <div className="item-carou">
            <img src="./img/meter1.svg" alt="" />
            <h2>JS</h2>
          </div>
          <div className="item-carou">
            <img src="./img/meter3.svg" alt="" />
            <h2>PHP</h2>
          </div>
          <div className="item-carou">
            <img src="./img/meter1.svg" alt="" />
            <h2>Html/CSS</h2>
          </div>
          <div className="item-carou">
            <img src="./img/meter1.svg" alt="" />
            <h2>React</h2>
          </div>
        </Carousel>
      </div>
    </div>
  );
};

export default Skill;
