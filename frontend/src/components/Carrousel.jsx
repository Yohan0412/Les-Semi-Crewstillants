import React from "react";

import "../Carrousel.css";

function Carrousel() {
  return (
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
          <img src="src/assets/nan.jpg" className="d-block w-100" alt="..." />
          <div className="sliderPres carousel-caption d-none d-md-block">
            <h5 className="sliderTitle fw-bold">
              Banh khot (palets de riz crevettes)
            </h5>
            <p>Il seraient originaires de la Côte centrale du sud.</p>
          </div>
        </div>
        <div className="carousel-item">
          <img src="src/assets/japan.jpg" className="d-block w-100" alt="..." />
          <div className="sliderPres carousel-caption d-none d-md-block">
            <h5 className="sliderTitle fw-bold">Karēraisu (Curry japonnais)</h5>
            <p>Some representative placeholder content for the second slide.</p>
          </div>
        </div>
        <div className="carousel-item">
          <img
            src="src/assets/indian.jpg"
            className="d-block w-100"
            alt="..."
          />
          <div className="sliderPres carousel-caption d-none d-md-block">
            <h5 className="sliderTitle fw-bold">
              Murghmakhani (Poulet au Beurre)
            </h5>
            <p>
              Ce plat originaire de New Dehli a été préparé pour la première
              fois en 1947 par les restaurateurs indiens Kundan Lal Gujral et
              Kundan Lal Jaggi
            </p>
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
  );
}

export default Carrousel;
