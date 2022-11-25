import React from "react";
import "./contact.css";

function Contact() {
  return (
    <form className="form ">
      <img
        src="https://media.discordapp.net/attachments/1044340376091234378/1045510021292769341/pexels-pixabay-326279.jpg"
        className="img-fluid"
        alt="fond du hearder"
      />
      <div className="container-fluid bg-success">
        <div className="contact-name">
          <input
            value=""
            className="input-name m-1 p-2"
            type="text"
            name="user_name"
            placeholder="Nom"
            required
          />
        </div>

        <div className="">
          <input
            value=""
            className="input-name m-1 p-2"
            type="text"
            name="prenom"
            placeholder="Prénom"
            required
          />
        </div>

        <div className="">
          <input
            value=""
            className="input-email  m-1 p-2"
            type="email"
            name="user_email"
            placeholder="Adresse email"
            required
          />
        </div>

        <div className="">
          <textarea
            value=""
            className="contactTextarea m-1 p-2"
            name="message"
            placeholder="Entrer votre message"
            required
          />
        </div>

        <div className="">
          <button
            className="contactFormButton w-25  bg-warning text-success m-3"
            type="submit"
          >
            Envoyer
          </button>
        </div>
      </div>
    </form>
  );
}
export default Contact;
