
import React from "react";
import FooterList from "@components/FooterList";
import logo from "../assets/logo.svg";

import Carrousel from "@components/Carrousel";

import "../Home.css";

export default function Home() {
  return (
    <div>
      <Carrousel />
      <div className="projetPresentation">
        <h2>Notre projet</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui
          architecto, delectus molestias modi deserunt at, harum dolores placeat
          inventore, sequi minima accusamus pariatur nisi voluptatibus deleniti?
          Odio quia aspernatur possimus!
        </p>
      </div>
      <div className="continentHome d-flex flex-column">
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
        <img
          src="https://asset-a.grid.id//crop/0x0:0x0/360x240/photo/2022/06/07/benua-asiajpg-20220607093406.jpg"
          alt=""
          className="asia w-100 py-1"
        />
        <div className="africaEurope d-flex w-100 gap-1">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQomdm7APGFSTwXby-p1XZbLERBKS7jOuFgWauNubOa1upgyZlcaq1VE5rV3BzqOfBQsto&usqp=CAU"
            alt=""
            className="africa w-45"
          />
          <img
            src="https://voyage.aprr.fr/sites/default/files/styles/content_image/public/2022-06/Carte%20itin%C3%A9raire%202019_V9%20%281%29.jpg?itok=AtirYDPG"
            alt=""
            className="europe w-75"
          />
        </div>
      </div>
      <FooterList />
    </div>
      <p>
        Edit <code>App.jsx</code> and save to test HMR updates.
      </p>
      <p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        {" | "}
        <a
          className="App-link"
          href="https://vitejs.dev/guide/features.html"
          target="_blank"
          rel="noopener noreferrer"
        >
          Vite Docs
        </a>
      </p>
    </header>
  );
}
