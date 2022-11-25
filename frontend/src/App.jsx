import Home from "./pages/Home";

import "./App.css";

// const data = [
//   {
//     id: 1,
//     continent: "Asie",
//     pays: "Japon",
//     recettes_names: "Beignets tempura",
//     infos:
//       "La pâte à beignet étant particulièrement légère et digeste, il ne faut pas hésiter à opter pour un assortiment conséquent de tempura.",
//     images:
//       "https://www.kanpai.fr/sites/default/files/styles/content_lg/public/uploads/2021/01/tempura-tobari-ise-7.jpg",
//   },
//   {
//     id: 2,
//     continent: "Asie",
//     pays: "Vietnam",
//     recettes_names: "bo bun",
//     infos:
//       "Le bò bún est un type de plat de vermicelles de riz servi à température ambiante et viande chaude, garni de salade et arrosée de sauce de poisson sucrée-vinaigrée.",
//     images:
//       "https://img.cuisineaz.com/660x660/2022/03/07/i183119-bo-bun-au-thermomix.webp",
//   },
//   {
//     id: 3,
//     continent: "Amerique-Du-Nord",
//     pays: "Mexique",
//     recettes_names: "tacos",
//     infos:
//       "On pense que les tacos viennent du Mexique, bien avant l'arrivée des Espagnols. Les anciens Mexicains utilisaient des tortillas de maïs douces et plates fraîchement préparées et leur donnaient des garnitures comme du poisson et des organes cuits.",
//     images: "https://www.demotivateur.fr/images-buzz/10010/2.jpg",
//   },
//   {
//     id: 5,
//     continent: "Amerique-Du-Nord",
//     pays: "Etats-Unis",
//     recettes_names: "Hamburger",
//     infos:
//       "Le hamburger est américain, mais a des racines allemandes, puisque son nom vient de la ville d'Hambourg en Allemagne. Aux Etats-Unis, dans les années 1870, il n'était pas rare de croiser des immigrés allemands, en particulier en Pennsylvanie.",
//     images:
//       " https://www.radiofrance.fr/s3/cruiser-production/2019/02/3e27345f-9e1e-45bb-9e5f-906f0abb2870/1200x680_gettyimages-922684138.jpg",
//   },
//   {
//     id: 6,
//     continent: " Europe",
//     pays: "Italie",
//     recettes_names: "Pizza",
//     infos:
//       " La pizza est née au XVIème siècle dans la ville de Naples en Italie. A cette époque on essayait d'améliorer le goût – un peu fade – des crêpes de pain, avec l'aide de gros sel et de gras de porc.",
//     images:
//       "https://upload.wikimedia.org/wikipedia/commons/c/c8/Pizza_Margherita_stu_spivack.jpg",
//   },
//   {
//     id: 7,
//     continent: "Europe",
//     pays: "Royaume-Unis",
//     recettes_names: "Fish-And-Chips",
//     infos:
//       "Dans le nord du Royaume-Uni, on retrouve surtout du haddock, qui désigne en réalité un morceau d'aiglefin salé, fumé et teint au rocou, qui lui donne sa couleur orangée",
//     images: "https://fr.frije.com/content/recipes/252/800-1.jpg?cc=357221",
//   },
//   {
//     id: 8,
//     continent: "Afrique",
//     pays: "Cote-d'ivoire",
//     recettes_names: "Foufou-De-Banane",
//     infos:
//       "Le foufou est un plat d'origine africaine fait à base de bananes plantains mûres et/ou non mûres. En pays Adjoukrou (sud de la Côte d'Ivoire), il est traditionnellement accompagné de sauce claire.",
//     images:
//       "https://mediapartbenin.com/public/ckeditor/files/IMG-20211119-WA0143.jpg",
//   },
//   {
//     id: 9,
//     continent: "Afrique",
//     pays: "Niger",
//     recettes_names: "Dambou",
//     infos:
//       "Le dambou est un plat originaire du Niger à base de céréales et de moringa.",
//     images:
//       "https://img.cuisineaz.com/660x660/2016/08/02/i107824-dambou-couscous-aux-epinards.webp",
//   },
//   {
//     id: 12,
//     continent: "Amérique du Sud",
//     pays: "Argentines",
//     recettes_names: "Empanadas argentins au boeuf ",
//     infos:
//       "L'empanada est un petit chausson farci originaire d'Amérique du Sud. Grâce à sa proximité avec l'Espagne, Montpellier regorge de restaurants dans lesquels déguster cette spécialité latino. ",
//     images:
//       "https://img.cuisineaz.com/660x660/2013/12/20/i19930-empanadas-argentins-au-boeuf.webp",
//   },
//   {
//     id: 13,
//     continent: "Amérique-du-Sud",
//     pays: "bresil",
//     recettes_names: "Feijoada ",
//     infos:
//       "L'empanada est un petit chausson farci originaire d'Amérique du Sud. Grâce à sa proximité avec l'Espagne, Montpellier regorge de restaurants dans lesquels déguster cette spécialité latino. ",
//     images:
//       "https://img.cuisineaz.com/660x660/2013/12/20/i91621-feijoada-recette-bresilienne.webp",
//   },
//   {
//     id: 14,
//     continent: "Océanie",
//     pays: "Australie",
//     recettes_names: "Spaghettis aux courgettes à l'australienne",
//     infos:
//       "La cuisine australienne contemporaine combine des origines indigènes et britanniques avec des influences méditerranéennes et asiatiques. ",
//     images:
//       "file:///C:/Users/33676/Downloads/i180586-shutterstock-568772233.webp",
//   },
//   {
//     id: 15,
//     continent: "Océanie",
//     pays: "indonésie",
//     recettes_names: "Nasi lemak",
//     infos:
//       "Le nasi lemak est le plat traditionnel le plus emblématique de Malaisie.Il s’agit de riz parfumé aux feuilles de pandan et au lait de coco accompagné d’une pâte pimentée aux anchois, le sambal, et d’anchois et d’arachides frits. ",
//     images:
//       "https://img.cuisineaz.com/660x660/2021/04/27/i168679-shutterstock-302939660.webp",
//   },
//   {
//     id: 16,
//     continent: "Dom-Tom",
//     pays: "réunion",
//     recettes_names: "Rougail saucisses",
//     infos:
//       "Le rougail saucisse est un plat traditionnel réunionnais, à base de saucisses de porc ou de poulet préparées à la créole, souvent fumées, mais parfois fraîches. ",
//     images:
//       "https://img.cuisineaz.com/660x660/2021/06/28/i179435-rougail-saucisses-de-la-reunionimg-8811-2.webp",
//   },
// ];

function App() {
  return (
    <div className="App">
      <Home />
      <p>coucou les filles</p>
    </div>
  );
}

export default App;
