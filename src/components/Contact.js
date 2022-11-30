import axios from "axios";
import React, { useState } from "react";

const Contact = () => {
  const formInitial = {
    nom: "",
    prenom: "",
    mail: "",
    num: "",
    message: "",
  };

  const [formInfo, setFormInfo] = useState(formInitial);
  const [statut, setStatut] = useState({ error: false, message: "" });

  /* Permets d'ajouter les infos du formulaire */
  const updateFormInfo = (detail, value) => {
    if (value !== "")
      setFormInfo({
        ...formInfo,
        [detail]: value,
      });
  };

  // Envoie le mail grâce à nodemailer
  const handleMail = (e) => {
    e.preventDefault();

    axios
      .post("http://localhost:5000/contact", formInfo)
      .then(function (response) {
        if (response.data.code === 200) {
          setStatut({ error: false, message: response.data.status });
          setFormInfo(formInitial);
        } else setStatut({ error: true, message: response.data.status });
      })
      .catch(function (error) {
        setStatut({ error: true, message: error.data.status });
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
              value={formInfo.nom}
              onChange={(e) => updateFormInfo("nom", e.target.value)}
            />
            <input
              type="text"
              placeholder="Prénom"
              value={formInfo.prenom}
              onChange={(e) => updateFormInfo("prenom", e.target.value)}
            />
          </div>
          <div className="line">
            <input
              type="text"
              placeholder="Email"
              value={formInfo.mail}
              onChange={(e) => updateFormInfo("mail", e.target.value)}
            />
            <input
              type="text"
              placeholder="Téléphone"
              value={formInfo.num}
              onChange={(e) => updateFormInfo("num", e.target.value)}
            />
          </div>
          <div className="line">
            <textarea
              placeholder="Message"
              name=""
              id=""
              cols="100"
              rows="7"
              value={formInfo.message}
              onChange={(e) => updateFormInfo("message", e.target.value)}
            ></textarea>
          </div>
          <div className="line">
            <button onClick={handleMail}>Envoyer</button>
            {statut !== "" && (
              <p className={statut.error ? "error" : "success"}>
                {statut.message}
              </p>
            )}
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
