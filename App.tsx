import { StatusBar } from "expo-status-bar";
import React from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import Cathegories from "./components/Cathegories";
const Data = [
  {
    Title: "Petit Dèjeuner",
    elements: [
      {
        name: "Omelette Nature ",
        prix: 24,
        comp: "",
      },
      {
        name: "Omelette au Jambon",
        prix: 26,
        comp: "2Œufs, huile d’olive, olive noir, jambon, pain",
      },
      {
        name: "Omelette au Champignon",
        prix: 17,
        comp: "2Œufs, huile d’olive, olive noir, champignon, pain",
      },
      {
        name: "Omlette Espagnole ",
        prix: 19,
        comp:
          "2Œefs, poivron rouge et vert, oignon, tomate, huile d’olive, olive noir, fromage, pain",
      },
      {
        name: "Omlette crevette :",
        prix: 19,
        comp: "2Œufs, crevette, huile d’olive, olive noir, fromage, pain",
      },
      {
        name: "Cake aux choix",
        prix: 20,
        comp: "Orange, Citron, Vanille, Amandes, Choconoix",
      },
      {
        name: "Fassi",
        prix: 22,
        comp: "2Œufs, khlie, pain",
      },
      {
        name: "Chakchoucka à l’œuf",
        prix: 25,
        comp: "Boisson ,  Eau sidi Ali",
      },
      {
        name: "Chakchouka",
        prix: 25,
        comp: "2Œefs, tomate, khlie, huile d’olive, olive noir, pain",
      },
      {
        name: "Catalan",
        prix: 25,
        comp: "Tranche espagnol, 1oeuf, huile d’olive, olive noir, pain",
      },
      {
        name: "Croque damme",
        prix: 25,
        comp:
          "3pain demi, 1ouef, fromage rappé, jombon, huile d’olive, olive noir",
      },
      {
        name: "Croque monsieur",
        prix: 25,
        comp:
          "4pain demi, 2Œufs, fromage rappé, jombon, huile d’olive, olive noir",
      },
      {
        name: "Marocain",
        prix: 22,
        comp:
          "Harcha, maloui, huile d’olive, olive noir, fromage, miel, confiture",
      },
      {
        name: "Brunch :",
        prix: 22,
        comp:
          "pain blédure, sauce tomate, jombon, fromage, origan, huile d’olive, olive noir",
      },
      {
        name: "Beldi Gold :",
        prix: 22,
        comp: "amlou, huile d’olive, olive noir, jben, pain grillé",
      },
      {
        name: "Kids enfants :",
        prix: 22,
        comp: "conflex, lait froid, l’eau, crépe sucrée",
      },
      {
        name: "Parisien :",
        prix: 22,
        comp: "pannier de 3 mini viennoiserie",
      },
      {
        name: "Assitana :",
        prix: 22,
        comp: "Omlette ,  3merguez, club sandwich, gaufre, panna-cotta",
      },
      {
        name: "Le light :",
        prix: 22,
        comp: "toast grillé, fromage, fillet de dinde fumé, huile d’olive",
      },
      {
        name: "Toast :",
        prix: 22,
        comp:
          "toast grille aux choix : confiture,amlou,beure,fromage,miel,nutella",
      },
      {
        name: "Gourmand :",
        prix: 22,
        comp:
          "Omlette, 3tranche tortiné jben,nutella,confiture,  3pain cake au fruit de saison, pomme noisette, panna-cotta",
      },
      {
        name: "Royal :",
        prix: 22,
        comp:
          "2mini batbout au jambon œuf, fruit de saison, creme amande , pomme noisette, panna-cotta",
      },
      {
        name: "Rfissa :",
        prix: 22,
        comp: "2harcha complet, fruit sec, huile d’olive",
      },
    ],
    imgs: [
      require("./assets/pic1.jpg"),
      require("./assets/pic2.jpg"),
      require("./assets/pic3.jpg"),
    ],
  },
  {
    Title: "SALON DE THE",
    elements: [
      {
        name: "Café noir",
        prix: 11,
        comp: "",
      },
      {
        name: "Café aromatisé",
        prix: 16,
        comp: "",
      },
      {
        name: "Café créme",
        prix: 11,
        comp: "",
      },
      {
        name: "Café séparé",
        prix: 13,
        comp: "",
      },
      {
        name: "Café Allongé",
        prix: 13,
        comp: "",
      },
      {
        name: "Capsule nespresso",
        prix: 14,
        comp: "",
      },
      {
        name: "The marocain",
        prix: 11,
        comp: "",
      },
      {
        name: "Tisane lipton",
        prix: 13,
      },
      { name: "Tisane verveine", prix: 11 },
      { name: "Lait au chocolat", prix: 11 },
      { name: "Lait chaud", prix: 11 },
      { name: "Lait froid", prix: 10 },
    ],
    imgs: [require("./assets/cafe/0.jpg"), require("./assets/cafe/1.jpg")
    , require("./assets/cafe/2.jpg"),, require("./assets/cafe/3.jpg")],
  },

  {
    Title: " SUPPLEMENT",
    elements: [
      { name: "Soupe marocaine (tchicha)", prix: 9 },
      { name: "Amlou", prix: 12 },
      { name: "Omlette nature", prix: 10 },
      { name: "Omlette fromage", prix: 13 },
      { name: "Omlette jombon", prix: 17 },
      { name: "Omlette espagnole", prix: 17 },
      { name: "Omlette crevette", prix: 21 },
      { name: "Chakchouka à l’œuf", prix: 12 },
      { name: "Chakchouka à l’œuf et khlie", prix: 24 },
      { name: "Maloui ou Harcha", prix: 5 },
      { name: "Beure ou miel ou confiture", prix: 3 },
      { name: "Charcuterie Jombon", prix: 9 },
      { name: "Fromage rappé", prix: 8 },
      { name: "Fromage fondu", prix: 2 },
      { name: "Jben", prix: 8 },
      { name: "Tranche espagnole", prix: 9 },
      { name: "Créme chantilly", prix: 5 },
      { name: "Pain au chocolat", prix: 6 },
      { name: "Créme amandes", prix: 8 },
      { name: "Baghrir", prix: 2 },
      { name: "Tost fromage", prix: 16 },
      { name: "Croque dame/mr", prix: 21 },
      { name: "Fassi", prix: 21 },
      { name: "Pannier de mini vinoiserie", prix: 11 },
      { name: "Lelight", prix: 19 },
      { name: "Toast", prix: 12 },
      { name: "Paicéreal petit format", prix: 5 },
      { name: "Olive noir", prix: 3 },
      { name: "Huile d’olive", prix: 5 },
      { name: "Assitana", prix: 27 },
      { name: "Brunch", prix: 19 },
      { name: "Gaurmand", prix: 26 },
      { name: "Royal", prix: 26 },
    ],
    imgs: [require("./assets/pic4.jpg"), require("./assets/pic5.jpg")],
  },
  {
    Title: "Cocktails cafe chaud",
    elements: [
      {
        name: "Café cookies",
        prix: 22,
        comp: "mixer cookies, lait, café, Créme Chantilly",
      },
      {
        name: "Vanilla coffée",
        prix: 22,
        comp: "mixer vanille, lait, café, créme chantilly",
      },
      {
        name: "Caramelo mocha",
        prix: 22,
        comp: "mixer chocolat, mixer caramel, lait, café, créme chantilly",
      },
      {
        name: "Mokaccino",
        prix: 22,
        comp: "nutella, café allongé, Créme chantilly",
      },
      {
        name: "Cappuccino",
        prix: 23,
        comp: "chocolat, caramel, café, crème Chantilly",
      },
      { name: "Cappuccino light", prix: 18, comp: "chocolat, caramel, café" },
      { name: "Nutella chaud", prix: 22, comp: "avec créme chantilly" },
      { name: "Chocolat chaud à l’ancienne", prix: 18, comp: "" },
      {
        name: "Chocolat liegeois à l’ancienne ",
        prix: 22,
        comp: "avec créme chantilly",
      },
    ],
    imgs: [require("./assets/ch.jpg")],
  },
  {
    Title: "Jus",
    elements: [
      { name: "Jus orange", prix: 17, comp: "" },
      { name: "Jus de citron", prix: 18, comp: "" },
      { name: "Jus de pomme", prix: 21, comp: "Base de lait : 17 DH" },
      { name: "Jus de banane", prix: 21, comp: "Base de lait : 17 DH" },
      { name: "Jus d’avocat", prix: 23, comp: "Base de lait : 21 DH" },
      { name: "Jus de péche", prix: 22, comp: "" },
      { name: "Jus d’ananas", prix: 22, comp: "" },
      { name: "Jus de carotte", prix: 20, comp: "" },
      { name: "Jus gingembres citron", prix: 23, comp: "" },
      { name: "Jus Fraise", prix: 19, comp: "Base de lait : 16 DH" },
      { name: "Cocktail fruit frais", prix: 27, comp: "Base de lait : 24 DH" },
      { name: "Cocktail fruit sec", prix: 31, comp: "Base de lait : 27 DH" },
      { name: "Cocktail assitana", prix: 32, comp: "Base de lait : 30 DH" },
      { name: "Jus de citron kiwi", prix: 20, comp: "" },
      { name: "Jus d’ananas kiwi citron", prix: 24, comp: "" },
    ],
    imgs: [require("./assets/12.png"), require("./assets/7.png"), require("./assets/19.png")],
  },
  {
    Title: "COCKTAIL FROID",
    elements: [
      { name: "Frapuccino ice", prix: 23, comp: ", " },
      {
        name: "Marroccino ice coffée",
        prix: 16,
        comp: ",nutella, cookies, café au lait",
      },
      { name: "Vanilla ice coffée", prix: 11, comp: "vanille" },
      { name: "Cappucino ice", prix: 13, comp: "café, caramel, lait" },
      {
        name: "Mocaccino ice",
        prix: 13,
        comp: "nutella, café au lait, créme chantilly",
      },
    ],
    imgs: [require("./assets/ice.jpg")],
  },

  {
    Title: "COCKTAIL DE PASSION",
    elements: [
      { name: "Punch", prix: 23, comp: "orange, mixer punch, citron, ananas" },
      { name: "Fruit de passion", prix: 25, comp: "orange, fruit de passion" },
      {
        name: "Florida",
        prix: 25,
        comp: "mixer tropical, orange ou citron , noix de coco",
      },
      {
        name: "Pinacolada",
        prix: 27,
        comp: "mixer pinacolada, jus d’ananas, noix de coco",
      },
      {
        name: "Lovely",
        prix: 25,
        comp: "mixer forest fruit, jus fruit rouge ",
      },
      {
        name: "Diabolo",
        prix: 28,
        comp: "mixer blue berry, mixer punch, sprite",
      },
      {
        name: "Borra Borra",
        prix: 27,
        comp: "citron, orange, fraise, fruit de passion, grenadille, ananas",
      },
      {
        name: "Cocktail tropical fruit",
        prix: 26,
        comp: "ananas, banane, mixer tropical",
      },
      {
        name: "Smoothie aux fruit",
        prix: 28,
        comp: "avocat, fraise, orange, une boule",
      },
      {
        name: "Cocktail mango magic",
        prix: 28,
        comp: "manguo purée, orange, mangue",
      },
      {
        name: "X bébé smoothie",
        prix: 27,
        comp: "blue berry, yaourt, 2 boules",
      },
    ],
    imgs: [require("./assets/cafe/6.jpg"), require("./assets/cafe/1.jpg")],
  },

  {
    Title: "Mojito",
    elements: [
      { name: "Mojito nature", prix: 23, comp: "Citron, menthe, mixer mujito" },
      {
        name: "Mojito aromatisé",
        prix: 26,
        comp: "Au choix fruit de passion/punch/fraise/forest fruit",
      },
    ],
    imgs: [require("./assets/4.png")],
  },
  {
    Title: "Boisson",
    elements: [
      { name: "Eau minérale 1,5L", prix: 15, comp: "" },
      { name: "Eau minérale 50cl", prix: 11, comp: "" },
      { name: "Soda", prix: 12, comp: "" },
      {
        name: "Oulmes Maxi/Tropicale/Orange/Citron/Mujito",
        prix: 12,
        comp: "",
      },
      { name: "Orangina 50cl", prix: 13, comp: "" },
      {
        name: "Oasis tropical/Pomme poire/Cassis fromboise",
        prix: 20,
        comp: "",
      },
      { name: "Schweppes agrum", prix: 15, comp: "" },
      { name: "Schweppes mujito", prix: 16, comp: "" },
      { name: "Sweety", prix: 17, comp: "" },
    ],
    imgs: [require("./assets/or.jpg"), require("./assets/ou.jpg")],
  },
  {
    Title: "Salades",
    elements: [
      {
        name: "Salade assitana",
        prix: 50,
        comp:
          "salade verte, carotte, choux, surimi, fruits de mer, crevette pané, ebly, mayonnaise vietnamienne",
      },
      {
        name: "Salade du chef",
        prix: 45,
        comp:
          "salade verte, fruits de mer, coeur de palmier, ananas, haricot rouge, mayonnaise vietnamienne",
      },
      {
        name: "Salade avocat crevettes",
        prix: 38,
        comp: "salade verte, avocat, crevettes, sauce cocktail",
      },
      {
        name: "Salade de pates",
        prix: 38,
        comp:
          "Les pates, thon, fromage, olive verte, maiz, olive noir, concombre, tomate cerise, artichaut, sauce blanche",
      },
      {
        name: "Salade fraicheur",
        prix: 37,
        comp:
          "Salade verte, poulet, jambon, tomate, coeur de palmier, mozzarella, raisin sec, noix, oeuf, sauce blanche",
      },
      {
        name: "Salade variée",
        prix: 35,
        comp:
          "salade verte, tomate, pomme de terre, carottes, thon, haricot vert, riz, anchois, olives vertes, ouefs, sauce blanche",
      },
      {
        name: "Salade exotiques",
        prix: 35,
        comp:
          "Salade verte, choux, carotte, fruit fraiche, crevette, mayonnaise vietnamienne",
      },
      {
        name: "Salade cesar",
        prix: 35,
        comp:
          "Salade romaine, poulet, crouton, tomate cerise, fromage, mayonaise vietnamienne",
      },
    ],
    imgs: [require("./assets/0.jpg"), require("./assets/8.jpg")],
  },
  {
    Title: "Pasta",
    elements: [
      { name: "Bolognaise", prix: 50, comp: "Sauce tomate" },
      { name: "Poulet", prix: 50, comp: "Sauce blanche" },
      { name: "Carbonara", prix: 45, comp: "Sauce blanche" },
      { name: "Fruits de mer", prix: 55, comp: "Sauce blanche" },
      { name: "Lasagne bolognaise", prix: 50, comp: "Sauce tomate" },
      {
        name: "Gratin fruit de mer",
        prix: 55,
        comp: "Fruit de mer, poisson blanc, surimi penné",
      },
    ],
    imgs: [require("./assets/17.png"), require("./assets/11.png")],
  },
  {
    Title: "Soupe",
    elements: [
      { name: "Soupe de poisson", prix: 15, comp: "" },
      {
        name: "Soupe assitana",
        prix: 60,
        comp: "bouillon poulet, crevettes, farce de nems, champignon noir",
      },
      {
        name: "Soupe pékinois",
        prix: 50,
        comp: "bouillon de poulet, légumes, poulet aigre piquante",
      },
      {
        name: "Soupe de fruit de mer",
        prix: 50,
        comp:
          "bouillon de poulet, crevette, calamar, champignon, champignon noir",
      },
    ],
    imgs: [require("./assets/soupe.jpg")],
  },
  {
    Title: "Paella",
    elements: [
      { name: "Paella 1 personne", prix: 45, comp: "" },
      { name: "Paella 2 personne", prix: 80, comp: "" },
      { name: "Paella 3 personne", prix: 120, comp: "" },
    ],
    imgs: [require("./assets/2.png")],
  },
  {
    Title: "Plats de poissons",
    elements: [
      { name: "Loup mariné en papillate", prix: 85, comp: "" },
      { name: "Loup gros sel", prix: 85, comp: "" },
      { name: "Loup à la plancha", prix: 85, comp: "" },
      { name: "Pavé de saumon", prix: 90, comp: "" },
    ],
    imgs: [require("./assets/pic4.jpg"), require("./assets/pic5.jpg")],
  },
  {
    Title: "Risotto",
    elements: [
      {
        name: "Risotto fruit de mer",
        prix: 55,
        comp: "Riz, fruit de mer, champignon, sauce blanche",
      },
      {
        name: "Risotto poulet",
        prix: 50,
        comp: "Riz, poulet, champignon, sauce blanche",
      },
    ],
    imgs: [require("./assets/pic4.jpg"), require("./assets/pic5.jpg")],
  },
  {
    Title: "Ration",
    elements: [
      { name: "Ration calamar", prix: 35, comp: "" },
      { name: "Ration crevette", prix: 35, comp: "" },
      {
        name: "Crevette pil pil",
        prix: 50,
        comp: "à la sauce tomate ou à l’ail",
      },
    ],
    imgs: [require("./assets/rosito.jpeg")],
  },
  {
    Title: "Fritures",
    elements: [
      {
        name: "Friture 1 personne",
        prix: 65,
        comp: "Pageot royal rouget, sole, calamar, crevettes, merlan, moules",
      },
      {
        name: "Friture 2 personne",
        prix: 115,
        comp: "Pageot royal rouget, sole, calamar, crevettes, merlan, moules",
      },
      {
        name: "Friture 3 personne",
        prix: 175,
        comp: "Pageot royal rouget, sole, calamar, crevettes, merlan, moules",
      },
    ],
    imgs: [require("./assets/fr.jpg")],
  },
  {
    Title: "Plats Viandes",
    elements: [
      { name: "Filet de boeuf", prix: 70, comp: "" },
      { name: "Entre cote", prix: 70, comp: "" },
      { name: "Emincé de boeuf", prix: 70, comp: "" },
      {
        name: "Souris d’agneau (suite à basse température)",
        prix: 80,
        comp: "",
      },
    ],
    imgs: [require("./assets/2.png")],
  },
  {
    Title: "Plats Volailles",
    elements: [
      { name: "Roulade de poulet", prix: 70, comp: "sauce blanche" },
      {
        name: "Emincé de poulet",
        prix: 70,
        comp: "sauce champignon ou sauce roquefort",
      },
      { name: "Blanc de poulet panné à l’anglaise", prix: 60, comp: "" },
      {
        name: "Poulet aigre doux",
        prix: 65,
        comp:
          "Poulet, poivron, champignon, ananas servi avec légumes, riz et sauce aigre doux",
      },
      {
        name: "Plat spécial Assitana",
        prix: 80,
        comp:
          "Fillet de boeuf et blanc poulet avec sauce au choix sauc champignon/requefort/poivre",
      },
    ],
    imgs: [require("./assets/15.png")],
  },
  {
    Title: "Brochettes",
    elements: [
      { name: "Viande hachée", prix: 60, comp: "" },
      { name: "Poulet", prix: 55, comp: "" },
      { name: "Merguez", prix: 55, comp: "" },
      { name: "Mixte", prix: 65, comp: "" },
    ],
   imgs: [require("./assets/15.png")],
  },

  {
    Title: "PLATS SPECIAL ASSITANA",
    elements: [
      {
        name: "champignon/requefort /poivre ",
        prix: 80,
        comp:
          "Servi avec garniture Fillet de bœuf et blanc poulet avec sauce au choix sauce ",
      },
    ],
    imgs: [require("./assets/pic4.jpg"), require("./assets/pic5.jpg")],
  },

  {
    Title: "Asiatique",
    elements: [
      {
        name: "Rouleux de printemps",
        prix: 40,
        comp:
          "Galette de riz+légumes+poulet+crevette+surimi+menthe+cacouette+sauce vietnamienne",
      },
    ],
    imgs: [require("./assets/pic4.jpg"), require("./assets/pic5.jpg")],
  },

  {
    Title: "LES NOUILLES",
    elements: [
      { name: "Nouilles Bœuf", prix: 65, comp: "" },
      { name: "Nouilles Poulet", prix: 60, comp: "" },
      { name: "Nouilles Crevettes", prix: 70, comp: "" },
      {
        name: "Riz cantonais vietnamienne",
        prix: 70,
        comp: "Riz+crevettes+poulet+poivron+champignon+carottes",
      },
      {
        name: "Riz saute crevettes vietnamienne",
        prix: 65,
        comp: "Riz+crevettes avec epices vietnamiennes",
      },
    ],
    imgs: [require("./assets/pic4.jpg"), require("./assets/pic5.jpg")],
  },

  {
    Title: "SIZZLING",
    elements: [
      {
        name: "Poulet sizzling :",
        prix: 70,
        comp: "poulet+champignon+épice vietnamienne(plaque chaufante)",
      },
      {
        name: "Bœuf sizzling :",
        prix: 75,
        comp: "bœuf+champignon+épice vietnamienne(plaque chaufante)",
      },
      {
        name: "Fruit de mer sizzling :",
        prix: 80,
        comp:
          "fruit de mer+poisson blanc+champignon+épice vietnamienne(plaque chaufante)",
      },
    ],
    imgs: [require("./assets/pic4.jpg"), require("./assets/pic5.jpg")],
  },

  {
    Title: "SPECIALITE MAROCAINE",
    elements: [
      {
        name: "Tajine de bœuf:",
        prix: 55,
        comp: "viande+pruneau+amande+œufs+oignon",
      },
      {
        name: "Tajine de poulet:",
        prix: 45,
        comp: "oulet+citron confit+olives+frites",
      },
    ],
    imgs: [require("./assets/pic4.jpg"), require("./assets/pic5.jpg")],
  },
  {
    Title: "COUSCOUS CHAQUE VENDREDI",
    elements: [
      {
        name: "Couscous viande",
        prix: 50,
        comp: "viande+légumes  servi avec lben",
      },
      {
        name: "Couscous tfaya",
        prix: 50,
        comp: "viande+tfaya servi avec lben",
      },
      {
        name: "Couscous de poulet",
        prix: 45,
        comp: "poulet+légumes servi avec lben",
      },
      {
        name: "Couscous tfaya",
        prix: 45,
        comp: "poulet+tfaya servi avec lben",
      },
    ],
    imgs: [require("./assets/pic4.jpg"), require("./assets/pic5.jpg")],
  },

  {
    Title: "FAST FOOD",
    elements: [
      {
        name: "SANDWICH PAIN MAISON OU PAIN TORTILLA SERVI AVEC FRITES)",
        prix: "",
        comp: "",
      },
      {
        name: "Parisien",
        prix: 42,
        comp:
          "salade tomate+cheddar+jambon+double steak+ouefs+sauce au choix avec pain maison ou tortilla",
      },
      {
        name: "Royal",
        prix: 42,
        comp:
          "salade+tomate+cheddar+steak+poulet mariné+sauce au choix avec pain maison ou tortilla",
      },
      {
        name: "Assitana",
        prix: 45,
        comp:
          "salade+tomate+cheddar+dinde+steak+galette pomme de terre sauce au choix avec pain maison ou tortilla",
      },
      {
        name: "Ciabatta Dinde",
        prix: 38,
        comp:
          "salade tomate+cheddar+escalope de dinde+jambon+sauce au choix avec pain ciabatta",
      },
      {
        name: "Ciabatta Viande hachée",
        prix: 40,
        comp:
          "salade tomate+cheddar+viande hachée+sauce au choix avec pain ciabatta",
      },
      {
        name: "Ciabatta Tender",
        prix: 42,
        comp:
          "salade tomate+cheddar+escalope de dinde+jambon+tender+sauce au choix avec pain ciabatta",
      },
    ],
    imgs: [require("./assets/pic4.jpg"), require("./assets/pic5.jpg")],
  },

  {
    Title: "BURGER",
    elements: [
      { name: "SERVI AVEC FRITES", prix: "", comp: "" },
      {
        name: "Chesse burguer",
        prix: 30,
        comp: "salade+tomate+cheddar+steak+sauce au choix",
      },
      {
        name: "Double cheese",
        prix: 35,
        comp: "salade+tomate+double fromage+double steak+sauce au choix",
      },
      {
        name: "Chicken burguer",
        prix: 30,
        comp: "salade+tomate+cheddar+poulet",
      },
      {
        name: "Eggs burguer",
        prix: 38,
        comp: "salade+tomate+cheddar+jambon+steak+ouefs+sauce au choix",
      },
      {
        name: "Assitana burguer",
        prix: 42,
        comp:
          "salade+tomate+cheddar+galette pommes de terre+steak+jombon+sauce au choix",
      },
    ],
    imgs: [require("./assets/pic4.jpg"), require("./assets/pic5.jpg")],
  },

  {
    Title: "POUTINE",
    elements: [
      {
        name: "Poutine dinde",
        prix: 30,
        comp: "dinde+frite+fromage+sauce fromagére",
      },
      {
        name: "Poutine viande hachée",
        prix: 32,
        comp: "viande hachée+frite+fromage+sauce fromagére",
      },
      {
        name: "Poutine mixte",
        prix: 35,
        comp: "dinde+viande hachée+frite+fromage+sauce froagére",
      },
    ],
    imgs: [require("./assets/pic4.jpg"), require("./assets/pic5.jpg")],
  },

  {
    Title: "NUGGET",
    elements: [
      { name: "6 piéces", prix: 20, comp: "" },
      { name: "10 piéces", prix: 30, comp: "" },
      { name: "Assiette frites", prix: 10, comp: "" },
    ],
    imgs: [require("./assets/pic4.jpg"), require("./assets/pic5.jpg")],
  },

  {
    Title: "PANINI (SERVIS AVEC FRITES)",
    elements: [
      { name: "Panini thon", prix: 25, comp: "thon+fromage+sauce au choix" },
      { name: "Panini dinde", prix: 26, comp: "dinde+fromage+sauce au choix" },
      {
        name: "Panini viande hachée",
        prix: 26,
        comp: "viande hachée+fromage+sauce au choix",
      },
      {
        name: "Panini mixte",
        prix: 8,
        comp: "dinde+viande hachée+fromage+sauce au choix",
      },
      {
        name: "Panini fruits de mer",
        prix: 30,
        comp: "fruits de mer+fromage+sauce au choix",
      },
    ],
    imgs: [require("./assets/pic4.jpg"), require("./assets/pic5.jpg")],
  },

  {
    Title: "GLACES (CITRON+FRAISE+PISTACHE+CARAMEL+NOUGAT+VANILLE+CHOCOLAT……)",
    elements: [
      { name: "1 Boule", prix: 11, comp: " " },
      { name: "2 Boules", prix: 21, comp: " " },
      { name: "3 Boules", prix: 30, comp: " " },
      { name: "4 Boules", prix: 42, comp: " " },
      { name: "Milk Shake", prix: 28, comp: " " },
      { name: "Orange Shake", prix: 26, comp: " " },
      { name: "Strawberry Shake", prix: 28, comp: " " },
      { name: "Panaché", prix: 27, comp: " " },
      { name: "Coupe Assitana glaces+fruits frais", prix: 48, comp: " " },
    ],
    imgs: [require("./assets/pic4.jpg"), require("./assets/pic5.jpg")],
  },

  {
    Title: "SMOOTHIES",
    elements: [
      {
        name: "Smoothies fraise",
        prix: 27,
        comp: "yaourt+lait+mixer+fraise+slays fraise",
      },
      {
        name: "Smoothies bananes",
        prix: 27,
        comp: "yaourt+lait+mixer bananes+slays bananes",
      },
      {
        name: "Smoothies chocolat",
        prix: 28,
        comp: "créme fraiche+lait chocolat+créme chantilly",
      },
      {
        name: "Smoothies fragola",
        prix: 29,
        comp: "créme fraiche+toping fraise+lait+créme chantilly",
      },
    ],
    imgs: [require("./assets/pic4.jpg"), require("./assets/pic5.jpg")],
  },

  {
    Title:'GAUFRES',
    elements: [
    {name: "Gaufres nature",prix:16,comp: ""},
    {name: "Gaufres miel",prix:18,comp: ""},
    {name: "Gaufres nutella",prix:22,comp: ""},
    {name: "Gaufres nutella bananes",prix:25,comp: ""},
    {name: "Gaufres nutella bueno",prix:28,comp: ""},
    {name: "Gaufres fruit frais",prix:30,comp: ""},
    ],
    imgs:[
    require('./assets/pic4.jpg'),
    require('./assets/pic5.jpg'),
    ]
    },


    {
        Title:'WAFFLE BUBBLE',
        elements: [
        {name: "LA FRUTELLA",prix:35,comp: "*Base nutella +chantilly *choisis 1 fruit (selon la saison) *choisis 1 coulis fraise ou chocolat ou caramel"},
        {name: "supplement fruit,coulis",prix:6,comp: ""},
        {name: "LA GOURMANDE",prix:45,comp: "*Base nutella+chantilly *choisis 1 gourmande oreo/bueno *choisis 1 glace vanille ou fraise ou caramel ou pistache ….."},
        {name: "*Supplément gourmande,glace",prix:15,comp: ""},
        ],
        imgs:[
        require('./assets/pic4.jpg'),
        require('./assets/pic5.jpg'),
        ]
        },


        {
            Title:'DESSERT',
            elements: [
            {name: "Tiramisu",prix:25,comp: ""},
            {name: "Salade fruits",prix:27,comp: ""},
            {name: "Raib nature",prix:11,comp: ""},
            {name: "Raib fruits frais",prix:18,comp: ""},
            {name: "Raib fruits secs",prix:21,comp: ""},
            {name: "Raib mixte",prix:25,comp: ""},
            {name: "Coupe assitana",prix:45,comp: ""},
            
            
            ],
            imgs:[
            require('./assets/pic4.jpg'),
            require('./assets/pic5.jpg'),
            ]
            },


            {
                Title:'CREPE SUCRE',
                elements: [
                {name: "Crepe nutella",prix:24,comp: ""},
                {name: "Crépe nutella banane",prix:26,comp: ""},
                {name: "Crepe nutella buenno",prix:28,comp: ""},
                {name: "Crepe miel amandes ou noix ",prix:23,comp: ""},
                {name: "Crepe Amlou .",prix:28,comp: ""},
                {name: "Crepe caramel amandes ou noix",prix:25,comp: ""},
                {name: "Crepe sucre",prix:18,comp: ""},
                {name: "Crepe Assitana",prix:38,comp: "nutella,1 boule de glace au choix ,chantilly"},
                
                
                ],
                imgs:[
                require('./assets/pic4.jpg'),
                require('./assets/pic5.jpg'),
                ]
                },


                {
                    Title:'CREPE SALEE',
                    elements: [
                    {name: "Crepe jambon fromage ouef",prix:28,comp: ""},
                    {name: "Crépe  poulet fromage champigbonse",prix:28,comp: ""},
                    {name: "Crepe viande hachée sauce blanche fromage",prix:30,comp: ""},
                    {name: "Crepe crevette ",prix:30,comp: ""},
                    
                    
                    ],
                    imgs:[
                    require('./assets/pic4.jpg'),
                    require('./assets/pic5.jpg'),
                    ]
                    },


                   
        

];

export default function App() {
  return (
    <View style={styles.container}>
      <ScrollView>
        {Data.map((el) => (
          <Cathegories Data={el} />
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    marginTop: 30,
    padding: 10,
  },
});
