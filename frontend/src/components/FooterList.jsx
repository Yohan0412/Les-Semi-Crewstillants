import React from "react";
import "./footerList.css";

function FooterList() {
  return (
    <footer className="footer">
      <div className="container-fluid logo-footer">
        <div className="taille-logo m-3 mt-4v">
          <img src="src/assets/Cook.png" alt="Cook & Trip" />
        </div>
      </div>
      <div className="social-logo">
        <img
          className="m-2"
          src="src/assets/square-facebook.svg"
          alt="Facebook"
        />
        <img
          className="m-2"
          src="src/assets/square-instagram.svg"
          alt="Facebook"
        />
        <img
          className="m-2"
          src="src/assets/square-pinterest.svg"
          alt="Facebook"
        />
      </div>
      <div className="Footer-copyright">
        © 2022 Copyright: Concocté avec 💛 @“Les Semi-crewstillants”
      </div>
      <i fab fa-facebook-square />
    </footer>
  );
}

export default FooterList;
