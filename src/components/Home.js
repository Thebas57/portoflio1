import React from "react";
import { FaArrowAltCircleRight } from "react-icons/fa";
import { Wave } from "react-animated-text";

const Home = () => {
  return (
    <div className="home" id="home">
      <div className="info">
        <span className="welcome">Bienvenue sur mon portfolio</span>
        <h1>Bonjour, je suis Théo HELF</h1>
        <h1>
          <Wave
            text="Développeur informatique"
            effect="fadeOut"
            effectChange={0.1}
          ></Wave>
        </h1>
        <p>
          Le lorem ipsum est, en imprimerie, une suite de mots sans
          signification utilisée à titre provisoire pour calibrer une mise en
          page, le texte définitif venant remplacer le faux-texte dès qu'il est
          prêt ou que la mise en page est achevée. Généralement, on utilise un
          texte en faux latin, le Lorem ipsum ou Lipsum.
        </p>
        <button>
          Let's connect <FaArrowAltCircleRight />
        </button>
      </div>
      <div className="img">
        <img src="./img/header-img.svg" alt="home" />
      </div>
    </div>
  );
};

export default Home;
