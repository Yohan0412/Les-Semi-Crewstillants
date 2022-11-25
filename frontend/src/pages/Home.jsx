import React from "react";
import FooterList from "@components/FooterList";

import "../Home.css";

export default function Home() {
  return (
    <>
      <div className="home">
        <div
          id="carouselHomeCaptions"
          className="carousel slide"
          data-bs-ride="false"
        >
          <div className="carousel-indicators">
            <button
              type="button"
              data-bs-target="#carouselHomeCaptions"
              data-bs-slide-to="0"
              className="active"
              aria-current="true"
              aria-label="Slide 1"
            />
            <button
              type="button"
              data-bs-target="#carouselHomeCaptions"
              data-bs-slide-to="1"
              aria-label="Slide 2"
            />
            <button
              type="button"
              data-bs-target="#carouselHomeCaptions"
              data-bs-slide-to="2"
              aria-label="Slide 3"
            />
          </div>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img
                src="src/assets/nan.jpg"
                className="d-block w-100"
                alt="..."
              />
              <div className="carousel-caption d-none d-md-block">
                {/* <h5>First slide label</h5>
                <p>
                  Some representative placeholder content for the first slide.
                </p> */}
              </div>
            </div>
            <div className="carousel-item">
              <img
                src="src/assets/japan.jpg"
                className="d-block w-100"
                alt="..."
              />
              <div className="carousel-caption d-none d-md-block">
                {/* <h5>Second slide label</h5>
                <p>
                  Some representative placeholder content for the second slide.
                </p> */}
              </div>
            </div>
            <div className="carousel-item">
              <img
                src="src/assets/indian.jpg"
                className="d-block w-100"
                alt="..."
              />
              <div className="carousel-caption d-none d-md-block">
                {/* <h5>Third slide label</h5>
                <p>
                  Some representative placeholder content for the third slide.
                </p> */}
              </div>
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselHomeCaptions"
            data-bs-slide="prev"
          >
            <span className="carousel-control-prev-icon" aria-hidden="true" />
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselHomeCaptions"
            data-bs-slide="next"
          >
            <span className="carousel-control-next-icon" aria-hidden="true" />
            <span className="visually-hidden">Next</span>
          </button>
        </div>
        <div className="videoHome w-100 h-50">
          <video muted width="100%" controls="controls">
            <source
              src="..\assets\pexels-vanessa-loring-5865602.mp4"
              type="video/mp4"
            />
            Vous n'avez pas de navigateur moderne, donc pas de balise video
            HTML5 !
          </video>
        </div>
        <div className="projetPresentation">
          <h2>Cook & Trip</h2>
          <p>
            Si comme nous vous aimez les bons plats, en famille, entre amies ou encore seul (n'ayez pas honte d'être gourmand😜) <br />
            alors montez à bord de notre Combi sillonner les routes de la cuisine du monde avec nous. <br />
            L'idée ?! Vous faire découvrir de nouvelle saveur, de nouvelle destination, émoustiller vos papilles, époustoufler vos invités ! <br />
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
          <img
            src="src/assets/African.jpg"
            alt=""
            className="asia w-100 py-1"
          />
          <div className="africaEurope d-flex w-100 gap-1">
            <img
              src="src/assets/Asian.jpg"
              alt=""
              className="africa w-50"
            />
            <img
              src="src/assets/Europe.jpg"
              alt=""
              className="europe w-50"
            />
          </div>
        </div>
      </div>
      <FooterList />
    </>
  );
}
