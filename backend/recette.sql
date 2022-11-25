-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Hôte : localhost:3306
-- Généré le : jeu. 24 nov. 2022 à 14:44
-- Version du serveur : 8.0.31
-- Version de PHP : 7.4.19

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données : `road-trip`
--

-- --------------------------------------------------------

--
-- Structure de la table `recette`
--


CREATE DATABASE Cookandtrip;

CREATE TABLE `recette` (
  `id` int NOT NULL,
  `continent` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `pays` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `recettes_names` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `infos` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `images` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=armscii8;

--
-- Déchargement des données de la table `recette`
--

INSERT INTO `recette`.`recette` (`id`, `continent`, `pays`, `recettes_names`, `infos`, `images`) VALUES
(1, 'Asie', 'Japon', 'Beignets tempura', 'La pâte à beignet étant particulièrement légère et digeste, il ne faut pas hésiter à opter pour un assortiment conséquent de tempura.', 'https://www.kanpai.fr/sites/default/files/styles/content_lg/public/uploads/2021/01/tempura-tobari-ise-7.jpg'),
(2, 'Asie', 'Vietnam', 'bo bun', 'Le bò bún est un type de plat de vermicelles de riz servi à température ambiante et viande chaude, garni de salade et arrosée de sauce de poisson sucrée-vinaigrée.', 'https://img.cuisineaz.com/660x660/2022/03/07/i183119-bo-bun-au-thermomix.webp'),
(3, 'Amerique-Du-Nord', 'Mexique', 'tacos', 'On pense que les tacos viennent du Mexique, bien avant l\'arrivée des Espagnols. Les anciens Mexicains utilisaient des tortillas de maïs douces et plates fraîchement préparées et leur donnaient des garnitures comme du poisson et des organes cuits.', 'https://www.demotivateur.fr/images-buzz/10010/2.jpg'),
(5, 'Amerique-Du-Nord', 'Etats-Unis', 'Hamburger', 'Le hamburger est américain, mais a des racines allemandes, puisque son nom vient de la ville d\'Hambourg en Allemagne. Aux Etats-Unis, dans les années 1870, il n\'était pas rare de croiser des immigrés allemands, en particulier en Pennsylvanie.', ' https://www.radiofrance.fr/s3/cruiser-production/2019/02/3e27345f-9e1e-45bb-9e5f-906f0abb2870/1200x680_gettyimages-922684138.jpg'),
(6, ' Europe', 'Italie', 'Pizza', ' La pizza est née au XVIème siècle dans la ville de Naples en Italie. A cette époque on essayait d\'améliorer le goût – un peu fade – des crêpes de pain, avec l\'aide de gros sel et de gras de porc.', 'https://upload.wikimedia.org/wikipedia/commons/c/c8/Pizza_Margherita_stu_spivack.jpg'),
(7, 'Europe', 'Royaume-Unis', 'Fish-And-Chips', 'Dans le nord du Royaume-Uni, on retrouve surtout du haddock, qui désigne en réalité un morceau d\'aiglefin salé, fumé et teint au rocou, qui lui donne sa couleur orangée', 'https://fr.frije.com/content/recipes/252/800-1.jpg?cc=357221'),
(8, 'Afrique', 'Cote-d\'ivoire', 'Foufou-De-Banane', 'Le foufou est un plat d\'origine africaine fait à base de bananes plantains mûres et/ou non mûres. En pays Adjoukrou (sud de la Côte d\'Ivoire), il est traditionnellement accompagné de sauce claire.', 'https://mediapartbenin.com/public/ckeditor/files/IMG-20211119-WA0143.jpg'),
(9, 'Afrique', 'Niger', 'Dambou', 'Le dambou est un plat originaire du Niger à base de céréales et de moringa.', 'https://img.cuisineaz.com/660x660/2016/08/02/i107824-dambou-couscous-aux-epinards.webp'),
(12, 'Amérique du Sud', 'Argentines', 'Empanadas argentins au boeuf ', 'L\'empanada est un petit chausson farci originaire d\'Amérique du Sud. Grâce à sa proximité avec l\'Espagne, Montpellier regorge de restaurants dans lesquels déguster cette spécialité latino. ', 'https://img.cuisineaz.com/660x660/2013/12/20/i19930-empanadas-argentins-au-boeuf.webp'),
(13, 'Amérique-du-Sud', 'bresil', 'Feijoada ', 'L\'empanada est un petit chausson farci originaire d\'Amérique du Sud. Grâce à sa proximité avec l\'Espagne, Montpellier regorge de restaurants dans lesquels déguster cette spécialité latino. ', 'https://img.cuisineaz.com/660x660/2013/12/20/i91621-feijoada-recette-bresilienne.webp'),
(14, 'Océanie', 'Australie', 'Spaghettis aux courgettes à l\'australienne', 'La cuisine australienne contemporaine combine des origines indigènes et britanniques avec des influences méditerranéennes et asiatiques. ', 'file:///C:/Users/33676/Downloads/i180586-shutterstock-568772233.webp'),
(15, 'Océanie', 'indonésie', 'Nasi lemak', 'Le nasi lemak est le plat traditionnel le plus emblématique de Malaisie.Il s’agit de riz parfumé aux feuilles de pandan et au lait de coco accompagné d’une pâte pimentée aux anchois, le sambal, et d’anchois et d’arachides frits. ', 'https://img.cuisineaz.com/660x660/2021/04/27/i168679-shutterstock-302939660.webp'),
(16, 'Dom-Tom', 'réunion', 'Rougail saucisses', 'Le rougail saucisse est un plat traditionnel réunionnais, à base de saucisses de porc ou de poulet préparées à la créole, souvent fumées, mais parfois fraîches. ', 'https://img.cuisineaz.com/660x660/2021/06/28/i179435-rougail-saucisses-de-la-reunionimg-8811-2.webp');

--
-- Index pour les tables déchargées
--

--
-- Index pour la table `recette`
--


--
-- AUTO_INCREMENT pour les tables déchargées
--

--
-- AUTO_INCREMENT pour la table `recette`
--


/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
