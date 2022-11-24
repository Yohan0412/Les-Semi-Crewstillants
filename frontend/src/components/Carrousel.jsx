import React from "react";

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
  );
}

export default Carrousel;
