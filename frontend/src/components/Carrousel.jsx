import React from "react";

import "../Carrousel.css";

function Carrousel() {
  return (
    <div className="slider d-flex flex-column">
      <div className="america d-flex gap-1 w-100">
        <img
          src="https://i.ebayimg.com/images/g/YnoAAOSwcvdjC41I/s-l400.jpg"
          alt=""
          className="northamerica w-50"
        />
        <img
          src="https://www.seanews.com.tr/images/haberler/2016_05/161140/latin-america1.jpg"
          alt=""
          className="southAmerica w-50"
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
    </div>
  );
}

export default Carrousel;
