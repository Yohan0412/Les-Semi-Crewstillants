import "./App.css";
import CardList from "@components/CardList";

const data = [
  {
    id: 1,
    continent: "Asie",
    pays: "Japon ",
    recettes_names: "Beignets Tempura",
    infos:
      "La pâte à beignet étant particulièrement légère et digeste, il ne faut pas hésiter à opter pour un assortiment conséquent de tempura.",
    images: "https://img.cuisineaz.com/660x660/2017/01/21/i115920-.jpeg",
    lien: "https://www.cuisineaz.com/recettes/beignets-tempura-40016.aspx",
  },
  {
    id: 2,
    continent: "Asie",
    pays: "Vietnam",
    recettes_names: "Bo Bun",
    infos:
      "Le bò bún est un type de plat de vermicelles de riz servi à température ambiante et viande chaude, garni de salade et arrosée de sauce de poisson sucrée-vinaigrée.",
    images:
      "https://img.cuisineaz.com/660x660/2022/03/07/i183119-bo-bun-au-thermomix.webp",
    lien: "https://www.hervecuisine.com/recette/bo-bun-vietnamien/",
  },
  {
    id: 3,
    continent: "Amérique-Du-Nord",
    pays: "Mexique",
    recettes_names: "Tacos",
    infos:
      "On pense que les tacos viennent du Mexique, bien avant l'arrivée des Espagnols. Les anciens Mexicains utilisaient des tortillas de maïs douces et plates fraîchement préparées et leur donnaient des garnitures comme du poisson et des organes cuits.",
    images:
      "https://img.cuisineaz.com/660x660/2015/06/30/i2309-tacos-a-la-mexicaine.jpg",
    liens:
      "https://www.marmiton.org/recettes/recette_tacos-mexicains_34389.aspx",
  },
  {
    id: 5,
    continent: "Amérique-Du-Nord",
    pays: "Etats-Unis",
    recettes_names: "Hamburger",
    infos:
      "Le hamburger est américain, mais a des racines allemandes, puisque son nom vient de la ville d'Hambourg en Allemagne. Aux Etats-Unis, dans les années 1870, il n'était pas rare de croiser des immigrés allemands, en particulier en Pennsylvanie.",
    images:
      "https://media.istockphoto.com/id/1309352410/fr/photo/cheeseburger-avec-la-tomate-et-la-laitue-sur-la-planche-en-bois.jpg?s=612x612&w=0&k=20&c=xkOJoHX-1XYVzGnCWnCQKDpsfbKT4244cE099kvDuj0=",

    lien: "https://www.zeste.ca/recettes/super-hamburger-americain",
  },
  {
    id: 6,
    continent: "Europe",
    pays: "Italie",
    recettes_names: "Pizza",
    infos:
      " La pizza est née au XVIème siècle dans la ville de Naples en Italie. A cette époque on essayait d'améliorer le goût – un peu fade – des crêpes de pain, avec l'aide de gros sel et de gras de porc.",
    images:
      "https://content-images.weber.com/content/Pizza-italienne.png?w=725&auto=compress,format&blend=https://ux2cms.imgix.net/system-images/gray-overlay-large.png?bs=inherit&balph=0&bm=normal",

    lien: "https://www.galbani.fr/recettes/pizza",
  },
  {
    id: 7,
    continent: "Europe",
    pays: "Royaume-Unis",
    recettes_names: "Fish-And-Chips",
    infos:
      "Dans le nord du Royaume-Uni, on retrouve surtout du haddock, qui désigne en réalité un morceau d'aiglefin salé, fumé et teint au rocou, qui lui donne sa couleur orangée",
    images:
      "https://lacasadelapaella.com/commande/550-home_default/fish-chips.jpg",

    lien: "https://www.marmiton.org/recettes/recette_fish-and-chips-la-vraie-pate-a-friture-anglaise_22308.aspx",
  },
  {
    id: 8,
    continent: "Afrique",
    pays: "Cote-d'ivoire",
    recettes_names: "Foufou-De-Banane",
    infos:
      "Le foufou est un plat d'origine africaine fait à base de bananes plantains mûres et/ou non mûres. En pays Adjoukrou (sud de la Côte d'Ivoire), il est traditionnellement accompagné de sauce claire.",
    images: "https://accrofoodie.files.wordpress.com/2018/09/5.png",

    lien: "https://www.cuisineaz.com/recettes/foufou-de-banane-55981.aspx",
  },
  {
    id: 9,
    continent: "Afrique",
    pays: "Niger",
    recettes_names: "Dambou",
    infos:
      "Le dambou est un plat originaire du Niger à base de céréales et de moringa.",
    images:
      "https://img.cuisineaz.com/660x660/2016/08/02/i107824-dambou-couscous-aux-epinards.webp",

    lien: "https://recettesvegetales.com/couscous-aux-epinards/",
  },
  {
    id: 12,
    continent: "Amérique-Du-Sud",
    pays: "Argentines",
    recettes_names: "Empanadas Argentins Au Boeuf ",
    infos:
      "L'empanada est un petit chausson farci originaire d'Amérique du Sud. Grâce à sa proximité avec l'Espagne, Montpellier regorge de restaurants dans lesquels déguster cette spécialité latino. ",
    images:
      "https://img.cuisineaz.com/660x660/2013/12/20/i19930-empanadas-argentins-au-boeuf.webp",

    lien: "https://www.cuisineaz.com/recettes/empanadas-argentins-au-boeuf-61804.aspx",
  },
  {
    id: 13,
    continent: "Amérique-Du-Sud",
    pays: "Bresil",
    recettes_names: "Feijoada ",
    infos:
      "L'empanada est un petit chausson farci originaire d'Amérique du Sud. Grâce à sa proximité avec l'Espagne, Montpellier regorge de restaurants dans lesquels déguster cette spécialité latino. ",
    images:
      "https://img.cuisineaz.com/660x660/2013/12/20/i91621-feijoada-recette-bresilienne.webp",

    lien: "https://www.marieclaire.fr/cuisine/feijoada,1202341.asp",
  },
  {
    id: 14,
    continent: "Océanie",
    pays: "Australie",
    recettes_names: "Spaghettis Aux Courgettes A L'Australienne",
    infos:
      "La cuisine australienne contemporaine combine des origines indigènes et britanniques avec des influences méditerranéennes et asiatiques. ",
    images:
      "https://www.recette360.com/wp-content/uploads/2020/11/Spaghetti-aux-courgettes-et-parmesan-696x734.jpg",

    lien: "https://www.cuisineaz.com/recettes/spaghettis-aux-courgettes-a-l-australienne-11376.aspx",
  },
  {
    id: 15,
    continent: "Océanie",
    pays: "Indonésie",
    recettes_names: "Nasi Lemak",
    infos:
      "Le nasi lemak est le plat traditionnel le plus emblématique de Malaisie.Il s’agit de riz parfumé aux feuilles de pandan et au lait de coco accompagné d’une pâte pimentée aux anchois, le sambal, et d’anchois et d’arachides frits. ",
    images:
      "https://img.cuisineaz.com/660x660/2021/04/27/i168679-shutterstock-302939660.webp",
    lien: "https://www.cuisineaz.com/recettes/nasi-lemak-112429.aspx",
  },
  {
    id: 16,
    continent: "Dom-Com",
    pays: "Réunion",
    recettes_names: "Rougail Saucisses",
    infos:
      "Le rougail saucisse est un plat traditionnel réunionnais, à base de saucisses de porc ou de poulet préparées à la créole, souvent fumées, mais parfois fraîches. ",
    images:
      "https://img.cuisineaz.com/660x660/2021/06/28/i179435-rougail-saucisses-de-la-reunionimg-8811-2.webp",

    lien: "https://www.marmiton.org/recettes/recette_rougail-saucisse_22851.aspx",
  },
];

function App() {
  return (
    <div className="App">
      <CardList data={data} />
      <Home />
    </div>
  );
}

export default App;
