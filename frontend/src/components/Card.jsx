function Card({ continent, pays, recette, images, infos, lien }) {
  return (
    <div className="card style-card mx-4 mb-4">
      <img src={images} className="card-img-top style-card" alt="" />
      <div className="card-body">
        <div className="card-text">{continent}</div>
        <div className="-card-text">{pays}</div>
        <h5 className="card-title">{recette}</h5>
        <p className="card-text">{infos}</p>
        <a href={lien} className="btn btn-primary">
          Go somewhere
        </a>
      </div>
    </div>
  );
}

export default Card;
