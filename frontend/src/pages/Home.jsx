import React from "react";

import Carrousel from "@components/Carrousel";

import "../Home.css";

export default function Home() {
  return (
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
              src="http://ileauxepices.com/blog/wp-content/uploads/2016/11/poulet-curry-vert-thailande.jpg"
              className="d-block w-100"
              alt="..."
            />
            <div className="carousel-caption d-none d-md-block">
              <h5>First slide label</h5>
              <p>
                Some representative placeholder content for the first slide.
              </p>
            </div>
          </div>
          <div className="carousel-item">
            <img
              src="https://s3-eu-west-1.amazonaws.com/images-ca-1-0-1-eu/recipe_photos/original/632/nems-3000x2000.jpg"
              className="d-block w-100"
              alt="..."
            />
            <div className="carousel-caption d-none d-md-block">
              <h5>Second slide label</h5>
              <p>
                Some representative placeholder content for the second slide.
              </p>
            </div>
          </div>
          <div className="carousel-item">
            <img
              src="https://www.royalchill.com/wp-content/uploads/2019/02/recette-facile-poulet-tikka.jpg"
              className="d-block w-100"
              alt="..."
            />
            <div className="carousel-caption d-none d-md-block">
              <h5>Third slide label</h5>
              <p>
                Some representative placeholder content for the third slide.
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
      <div className="videoHome w-100 h-50">
        <video muted width="100%" controls="controls">
          <source
            src="..\assets\pexels-vanessa-loring-5865602.mp4"
            type="video/mp4"
          />
          Vous n'avez pas de navigateur moderne, donc pas de balise video HTML5
          !
        </video>
      </div>
      <div className="projetPresentation">
        <h2>Notre projet</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui
          architecto, delectus molestias modi deserunt at, harum dolores placeat
          inventore, sequi minima accusamus pariatur nisi voluptatibus deleniti?
          Odio quia aspernatur possimus!
        </p>
      </div>
      <Carrousel />
    </div>
  );
}
