import React from "react";

function Contact() {
  return (
    <form className="form container-fluid bg-success">
      <div className="">
        <input
          value=""
          className="input-name w-50 m-1 p-2"
          type="text"
          name="user_name"
          placeholder="Nom"
          required
        />
      </div>

      <div className="">
        <input
          value=""
          className="input-name w-50 m-1 p-2"
          type="text"
          name="prenom"
          placeholder="Prénom"
          required
        />
      </div>

      <div className="">
        <input
          value=""
          className="input-email w-50 m-1 p-2"
          type="email"
          name="user_email"
          placeholder="Adress email"
          required
        />
      </div>

      <div className="">
        <textarea
          value=""
          className="contactTextarea  w-50 m-1 p-2"
          name="message"
          placeholder="Enter your message"
          required
        />
      </div>

      <div className="">
        <button
          className="button w-25 fs-5 bg-warning text-success"
          type="submit"
        >
          submit
        </button>
      </div>
    </form>
  );
}
export default Contact;
