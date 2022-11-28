import axios from "axios";
import React, { useState } from "react";

const Contact = () => {
  const [formInfo, setFormInfo] = useState([]);
  const [statut, setStatut] = useState("");

  /* Permets d'ajouter les infos du formulaire */
  const updateFormInfo = (detail, value) => {
    if (value !== "")
      setFormInfo({
        ...formInfo,
        [detail]: value,
      });
  };

  // Envoie le mail grâce à nodemailer
  const handleMail = () => {
    axios.post('http://localhost:5000/contact', formInfo)
      .then(function (response) {
        console.log(response);
        setStatut("rg")
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <div className="contact">
      <div className="img">
        <img src="./img/contact-img.svg" alt="contact" />
      </div>
      <div className="form-contact">
        <h1>Contact moi !</h1>
        <form action="">
          <div className="line">
            <input
              type="text"
              placeholder="Nom"
              onChange={(e) => updateFormInfo("nom", e.target.value)}
            />
            <input
              type="text"
              placeholder="Prénom"
              onChange={(e) => updateFormInfo("prenom", e.target.value)}
            />
          </div>
          <div className="line">
            <input
              type="text"
              placeholder="Email"
              onChange={(e) => updateFormInfo("mail", e.target.value)}
            />
            <input
              type="text"
              placeholder="Téléphone"
              onChange={(e) => updateFormInfo("num", e.target.value)}
            />
          </div>
          <div>
            <textarea
              placeholder="Message"
              name=""
              id=""
              cols="100"
              rows="7"
              onChange={(e) => updateFormInfo("message", e.target.value)}
            ></textarea>
          </div>
          <div>
            <button onClick={handleMail}>Envoyer</button>
            {statut !== "" && <p>coucou</p>}
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
