import React from "react";
import FooterList from "@components/FooterList";

import Carrousel from "@components/Carrousel";

import "../Home.css";

export default function Home() {
  return (
    <div className="home">
      <Carrousel />
      <div className="videoHome w-100 h-50">
        <video muted width="100%" controls="controls">
          <source
            src="..\assets\pexels-vanessa-loring-5865602.mp4"
            type="video/mp4"
          />
          Vous n'avez pas de navigateur moderne, donc pas de balise video !
        </video>
      </div>
      <div className="projetPresentation">
        <h2>Cook & Trip</h2>
        <p>
          Si comme nous vous aimez les bons plats, en famille, entre amies ou
          encore seul (n'ayez pas honte d'être gourmand😜) <br />
          alors montez à bord de notre Combi sillonner les routes de la cuisine
          du monde avec nous.
          <br />
          L'idée ?! Vous faire découvrir de nouvelle saveur, de nouvelle
          destination, émoustiller vos papilles, époustoufler vos invités !{" "}
          <br />
          Alors ?! On y va ?! 🚐
        </p>
      </div>
      <div className="continentHome d-flex flex-column">
        <div className="america d-flex gap-1 w-100">
          <img
            src="src/assets/North_America.jpg"
            alt=""
            className="northamerica w-50"
          />
          <img
            src="src/assets/South_America.jpg"
            alt=""
            className="southAmerica w-50"
          />
        </div>
        <img src="src/assets/African.jpg" alt="" className="europe w-75" />

        <div className="africaEurope d-flex w-100 gap-1">
          <img src="src/assets/Asian.jpg" alt="" className="africa w-50" />
          <img src="src/assets/Europe.jpg" alt="" className="europe w-50" />
        </div>
      </div>
      <FooterList />
    </div>
  );
}
