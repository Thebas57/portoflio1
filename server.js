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
  console.log(req.body);
  const name = req.body.nom + req.body.prenom;
  const email = req.body.mail;
  const message = req.body.message;
  const phone = req.body.num;
  const mail = {
    from: "theohelf@gmail.com",
    to: "theohelf@gmail.com",
    subject: "Contact Form Submission - Portfolio",
    html: `<p>Name: ${name}</p>
           <p>Email: ${email}</p>
           <p>Phone: ${phone}</p>
           <p>Message: ${message}</p>`,
  };
  

  sendmail(
    {
      from: "theohelf@gmail.com",
      to: "theohelf@gmail.com",
      subject: "test sendmail",
      html: "Mail of test sendmail ",
    },
    function (err, reply) {
      console.log("ucu")
      console.log(err && err.stack);
      console.dir(reply);
    }
  );
});
