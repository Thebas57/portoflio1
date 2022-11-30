const express = require("express");
const router = express.Router();
const cors = require("cors");
const nodemailer = require("nodemailer");
const sendmail = require("sendmail")();

// server used to send send emails
const app = express();
app.use(cors());
app.use(express.json());
app.use("/", router);
app.listen(5000, () => console.log("Server Running"));

/**
 * Initialize transport object
 */

router.post("/contact", (req, res) => {
  try {
    const transport = nodemailer.createTransport({
      host: "smtp.mailtrap.io",
      port: 2525,
      auth: {
        user: "56dfacc843381c",
        pass: "8e24c3e944faac",
      },
    });

    const message = {
      from: req.body.mail, // Sender address
      to: "theohelf@gmail.com", // List of recipients
      subject: "Contact Portfolio", // Subject line
      html: `<p>Name: ${req.body.nom}</p>
           <p>Prénom: ${req.body.prenom}</p>
           <p>Email: ${req.body.mail}</p>
           <p>Phone: ${req.body.num}</p>
           <p>Message: ${req.body.message}</p>`,
    };

    console.log(req.body);

    //Verif si il manque aucune information
    if (
      req.body.mail === "" ||
      req.body.nom === "" ||
      req.body.prenom === "" ||
      req.body.num === "" ||
      req.body.message === ""
    )
      throw new Error();

    transport.sendMail(message, function (err, info) {
      if (err) {
        res.json({ code: 404, status: "Problème dans l'envoie du message" });
      } else {
        res.json({ code: 200, status: "Message envoyé" });
      }
    });
  } catch (error) {
    res.json({
      code: 404,
      status: "Il manque une ou plusieurs information(s)",
    });
  }
});
