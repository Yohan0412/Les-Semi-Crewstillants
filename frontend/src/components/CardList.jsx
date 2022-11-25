import { useState } from "react";
import Card from "./Card";

function CardList({ data }) {
  const [filtre, setFiltre] = useState(data);

  const handleSelect = (e) => {
    if (e.target.value === "Asie") {
      setFiltre(data.filter((datas) => datas.continent === "Asie"));
    } else if (e.target.value === "Amérique-Du-Nord") {
      setFiltre(data.filter((datas) => datas.continent === "Amérique-Du-Nord"));
    } else if (e.target.value === "Europe") {
      setFiltre(data.filter((datas) => datas.continent === "Europe"));
    } else if (e.target.value === "Afrique") {
      setFiltre(data.filter((datas) => datas.continent === "Afrique"));
    } else if (e.target.value === "Amérique-Du-Sud") {
      setFiltre(data.filter((datas) => datas.continent === "Amérique-Du-Sud"));
    } else if (e.target.value === "Océanie") {
      setFiltre(data.filter((datas) => datas.continent === "Océanie"));
    } else if (e.target.value === "Dom-Com") {
      setFiltre(data.filter((datas) => datas.continent === "Dom-Com"));
    } else {
      setFiltre(data); // SINON ON RENVOIS TOUT LE TABLEAU
    }
  };

  return (
    <div className="contenair-card ">
      <div>
        <select className="select" name="home" onChange={handleSelect}>
          <option value="All">All</option>
          <option value="Asie">Asie</option>
          <option value="Amérique-Du-Nord">Amérique-Du-Nord</option>
          <option value="Afrique">Afrique</option>
          <option value="Amérique-Du-Sud">Amérique-Du-Sud</option>
          <option value="Océanie">Océanie</option>
          <option value="Dom-Com">Dom-Com</option>
        </select>
      </div>
      <div className="cardlist">
        {filtre.map((datar, index) => (
          <Card
            keys={index}
            continent={datar.continent}
            pays={datar.pays}
            recette={datar.recettes_names}
            images={datar.images}
            infos={datar.infos}
            drapeau={datar.drapeau}
            lien={datar.lien}
          />
        ))}
      </div>
    </div>
  );
}

export default CardList;
