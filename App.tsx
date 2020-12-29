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
        comp: "2 Œufs, huile d’olive, olive noir, jambon, pain",
      },
      {
        name: "Omelette au Champignon",
        prix: 17,
        comp: "2 Œufs, huile d’olive, olive noir, champignon, pain",
      },
      {
        name: "Omlette Espagnole ",
        prix: 19,
        comp:
          "2 Œufs, poivron rouge et vert, oignon, tomate, huile d’olive, olive noir, fromage, pain",
      },
      {
        name: "Omlette crevette ",
        prix: 19,
        comp: "2 Œufs, crevette, huile d’olive, olive noir, fromage, pain",
      },
      {
        name: "Cake aux choix",
        prix: 20,
        comp: "Orange, Citron, Vanille, Amandes, Choconoix",
      },
      {
        name: "Fassi",
        prix: 22,
        comp: "2 Œufs, khlie, pain",
      },
      {
        name: "Chakchoucka à l’œuf",
        prix: 25,
        comp: "Boisson, Eau sidi Ali",
      },
      {
        name: "Chakchouka",
        prix: 25,
        comp: "2 Œufs, tomate, khlie, huile d’olive, olive noir, pain",
      },
      {
        name: "Catalan",
        prix: 25,
        comp: "Tranche espagnol, Œuf, huile d’olive, olive noir, pain",
      },
      {
        name: "Croque damme",
        prix: 25,
        comp:
          "3 Pain demi, 1 Œuf, fromage rappé, jombon, huile d’olive, olive noir",
      },
      {
        name: "Croque monsieur",
        prix: 25,
        comp:
          "4 Pain demi, 2 Œufs, fromage rappé, jombon, huile d’olive, olive noir",
      },
      {
        name: "Marocain",
        prix: 22,
        comp:
          "Harcha, maloui, huile d’olive, olive noir, fromage, miel, confiture",
      },
      {
        name: "Brunch ",
        prix: 22,
        comp:
          "Pain blédure, Sauce tomate, jombon, fromage, origan, huile d’olive, olive noir",
      },
      {
        name: "Beldi Gold ",
        prix: 22,
        comp: "Amlou, huile d’olive, olive noir, jben, pain grillé",
      },
      {
        name: "Kids enfants ",
        prix: 22,
        comp: "Conflex, lait froid, l’eau, crépe sucrée",
      },
      {
        name: "Parisien ",
        prix: 22,
        comp: "Pannier de 3 mini viennoiserie",
      },
      {
        name: "Assitana ",
        prix: 22,
        comp: "Omlette, 3 merguez, club sandwich, gaufre, panna-cotta",
      },
      {
        name: "Le light ",
        prix: 22,
        comp: "Toast grillé, fromage, fillet de dinde fumé, huile d’olive",
      },
      {
        name: "Toast ",
        prix: 22,
        comp:
          "Toast grille aux choix : confiture,amlou,beure,fromage,miel,nutella",
      },
      {
        name: "Gourmand ",
        prix: 22,
        comp:
          "Omlette, 3tranche tortiné jben,nutella,confiture,  3pain cake au Fruit de saison, pomme noisette, panna-cotta",
      },
      {
        name: "Royal ",
        prix: 22,
        comp:
          "2 Mini batbout au jambon œuf, Fruit de saison, creme amande , pomme noisette, panna-cotta",
      },
      {
        name: "Rfissa ",
        prix: 22,
        comp: "2 Harcha complet, Fruit sec, huile d’olive",
      },
    ],
    imgs: [
      require("./assets/pic1.jpg"),
      require("./assets/pic2.jpg"),
      require("./assets/pic3.jpg"),
    ],
  },
  {
    Title: "Salon de thé",
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
      { name: "Lait au Chocolat", prix: 11 },
      { name: "Lait chaud", prix: 11 },
      { name: "Lait froid", prix: 10 },
    ],
    imgs: [require("./assets/cafe/0.jpg"), require("./assets/cafe/1.jpg")
    , require("./assets/cafe/2.jpg"),, require("./assets/cafe/3.jpg")],
  },

  {
    Title: "Supplement",
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
      { name: "Créme Chantilly", prix: 5 },
      { name: "Pain au Chocolat", prix: 6 },
      { name: "Créme amandes", prix: 8 },
      { name: "Baghrir", prix: 2 },
      { name: "Tost fromage", prix: 16 },
      { name: "Croque Damme / Monsieur", prix: 21 },
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
    Title: "Cocktails Café Chaud",
    elements: [
      {
        name: "Café cookies",
        prix: 22,
        comp: "Mixer cookies, lait, Café, Créme Chantilly",
      },
      {
        name: "Vanilla coffée",
        prix: 22,
        comp: "Mixer vanille, lait, Café, créme Chantilly",
      },
      {
        name: "Caramelo mocha",
        prix: 22,
        comp: "Mixer Chocolat, Mixer Caramel, lait, Café, créme Chantilly",
      },
      {
        name: "Mokaccino",
        prix: 22,
        comp: "Nutella, Café allongé, Créme Chantilly",
      },
      {
        name: "Cappuccino",
        prix: 23,
        comp: "Chocolat, Caramel, Café, crème Chantilly",
      },
      { name: "Cappuccino light", prix: 18, comp: "Chocolat, Caramel, Café" },
      { name: "Nutella chaud", prix: 22, comp: "Avec Créme Chantilly" },
      {
        name: "Chocolat liegeois à l’ancienne ",
        prix: 22,
        comp: "Avec Créme Chantilly",
      },
      { name: "Chocolat chaud à l’ancienne", prix: 18, comp: "" },

    ],
    imgs: [require("./assets/ch.jpg")],
  },
  {
    Title: "Jus",
    elements: [
      { name: "Jus Orange", prix: 17, comp: "" },
      { name: "Jus de Citron", prix: 18, comp: "" },
      { name: "Jus de pomme", prix: 21, comp: "Base de lait : 17 DH" },
      { name: "Jus de banane", prix: 21, comp: "Base de lait : 17 DH" },
      { name: "Jus d’avocat", prix: 23, comp: "Base de lait : 21 DH" },
      { name: "Jus de péche", prix: 22, comp: "" },
      { name: "Jus d’Ananas", prix: 22, comp: "" },
      { name: "Jus de carotte", prix: 20, comp: "" },
      { name: "Jus gingembres Citron", prix: 23, comp: "" },
      { name: "Jus Fraise", prix: 19, comp: "Base de lait : 16 DH" },
      { name: "Cocktail Fruit frais", prix: 27, comp: "Base de lait : 24 DH" },
      { name: "Cocktail Fruit sec", prix: 31, comp: "Base de lait : 27 DH" },
      { name: "Cocktail assitana", prix: 32, comp: "Base de lait : 30 DH" },
      { name: "Jus de Citron kiwi", prix: 20, comp: "" },
      { name: "Jus d’Ananas kiwi Citron", prix: 24, comp: "" },
    ],
    imgs: [require("./assets/12.png"), require("./assets/7.png"), require("./assets/19.png")],
  },
  {
    Title: "Cocktail Froid",
    elements: [
      { name: "Frapuccino ice", prix: 23, comp: "" },
      {
        name: "Marroccino ice coffée",
        prix: 16,
        comp: "Nutella, cookies, Café au lait",
      },
      { name: "Vanilla ice coffée", prix: 11, comp: "Vanille" },
      { name: "Cappucino ice", prix: 13, comp: "Café, Caramel, lait" },
      {
        name: "Mocaccino ice",
        prix: 13,
        comp: "Nutella, Café au lait, créme Chantilly",
      },
    ],
    imgs: [require("./assets/ice.jpg")],
  },

  {
    Title: "Cocktail De Passion",
    elements: [
      { name: "Punch", prix: 23, comp: "Orange, Mixer punch, Citron, Ananas" },
      { name: "Fruit de passion", prix: 25, comp: "Orange, Fruit de passion" },
      {
        name: "Florida",
        prix: 25,
        comp: "Mixer tropical, Orange ou Citron , noix de coco",
      },
      {
        name: "Pinacolada",
        prix: 27,
        comp: "Mixer pinacolada, Jus d’Ananas, noix de coco",
      },
      {
        name: "Lovely",
        prix: 25,
        comp: "Mixer forest Fruit, Jus Fruit rouge ",
      },
      {
        name: "Diabolo",
        prix: 28,
        comp: "Mixer blue berry, Mixer punch, sprite",
      },
      {
        name: "Borra Borra",
        prix: 27,
        comp: "Citron, Orange, fraise, Fruit de passion, grenadille, Ananas",
      },
      {
        name: "Cocktail tropical Fruit",
        prix: 26,
        comp: "Ananas, banane, Mixer tropical",
      },
      {
        name: "Smoothie aux Fruit",
        prix: 28,
        comp: "Avocat, fraise, Orange, une boule",
      },
      {
        name: "Cocktail mango magic",
        prix: 28,
        comp: "Manguo purée, Orange, mangue",
      },
      {
        name: "X bébé smoothie",
        prix: 27,
        comp: "Blue berry, Yaourt, 2 boules",
      },
    ],
    imgs: [require("./assets/cafe/6.jpg"), require("./assets/cafe/1.jpg")],
  },

  {
    Title: "Mojito",
    elements: [
      { name: "Mojito nature", prix: 23, comp: "Citron, menthe, Mixer mujito" },
      {
        name: "Mojito aromatisé",
        prix: 26,
        comp: "Au choix Fruit de passion/punch/fraise/forest Fruit",
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
          "Salade verte, carotte, choux, surimi, Fruits de mer, crevette pané, ebly, mayonnaise vietnamienne",
      },
      {
        name: "Salade du chef",
        prix: 45,
        comp:
          "Salade verte, Fruits de mer, coeur de palmier, Ananas, haricot rouge, mayonnaise vietnamienne",
      },
      {
        name: "Salade avocat crevettes",
        prix: 38,
        comp: "Salade verte, avocat, crevettes, Sauce cocktail",
      },
      {
        name: "Salade de pates",
        prix: 38,
        comp:
          "Les pates, thon, fromage, olive verte, maiz, olive noir, concombre, tomate cerise, artichaut, Sauce blanche",
      },
      {
        name: "Salade fraicheur",
        prix: 37,
        comp:
          "Salade verte, Poulet, jambon, tomate, coeur de palmier, mozzarella, raisin sec, noix, oeuf, Sauce blanche",
      },
      {
        name: "Salade variée",
        prix: 35,
        comp:
          "Salade verte, tomate, pomme de terre, carottes, thon, haricot vert, riz, anchois, olives vertes, ouefs, Sauce blanche",
      },
      {
        name: "Salade exotiques",
        prix: 35,
        comp:
          "Salade verte, choux, carotte, Fruit fraiche, crevette, mayonnaise vietnamienne",
      },
      {
        name: "Salade cesar",
        prix: 35,
        comp:
          "Salade romaine, Poulet, crouton, tomate cerise, fromage, mayonaise vietnamienne",
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
        name: "Gratin Fruit de mer",
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
        comp: "Bouillon Poulet, crevettes, farce de nems, champignon noir",
      },
      {
        name: "Soupe pékinois",
        prix: 50,
        comp: "Bouillon de Poulet, légumes, Poulet aigre piquante",
      },
      {
        name: "Soupe de Fruit de mer",
        prix: 50,
        comp:
          "Bouillon de Poulet, crevette, calamar, champignon, champignon noir",
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
    imgs: [require("./assets/pae.jpg"), require("./assets/2.png")],
  },
  {
    Title: "Plats de poissons",
    elements: [
      { name: "Loup mariné en papillate", prix: 85, comp: "" },
      { name: "Loup gros sel", prix: 85, comp: "" },
      { name: "Loup à la plancha", prix: 85, comp: "" },
      { name: "Pavé de saumon", prix: 90, comp: "" },
    ],
    imgs: [require("./assets/poisson1.jpg"), require("./assets/poisson2.jpg")],
  },
  {
    Title: "Risotto",
    elements: [
      {
        name: "Risotto Fruit de mer",
        prix: 55,
        comp: "Riz, Fruit de mer, champignon, Sauce blanche",
      },
      {
        name: "Risotto Poulet",
        prix: 50,
        comp: "Riz, Poulet, champignon, Sauce blanche",
      },
    ],
    imgs: [require("./assets/risoto1.jpg"), require("./assets/risoto2.jpg")],
  },
  {
    Title: "Ration",
    elements: [
      { name: "Ration calamar", prix: 35, comp: "" },
      { name: "Ration crevette", prix: 35, comp: "" },
      {
        name: "Crevette pil pil",
        prix: 50,
        comp: "à la Sauce tomate ou à l’ail",
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
    imgs: [require("./assets/fr.jpg"), require("./assets/fri.jpg")],
  },
  {
    Title: "Plats Viandes",
    elements: [
      { name: "Filet de boeuf", prix: 70, comp: "" },
      { name: "Entre cote", prix: 70, comp: "" },
      { name: "Emincé de boeuf", prix: 70, comp: "" },
      {
        name: "Souris d’agneau",
        prix: 80,
        comp: "Suite à basse température",
      },
    ],
    imgs: [require("./assets/filet.jpg"),require("./assets/cote.jpg"),require("./assets/emin.jpeg"),require("./assets/souri.jpeg")],
  },
  {
    Title: "Plats Volailles",
    elements: [
      { name: "Roulade de Poulet", prix: 70, comp: "Sauce blanche" },
      {
        name: "Emincé de Poulet",
        prix: 70,
        comp: "Sauce champignon ou Sauce roquefort",
      },
      { name: "Blanc de Poulet panné à l’anglaise", prix: 60, comp: "" },
      {
        name: "Poulet aigre doux",
        prix: 65,
        comp:
          "Poulet, poivron, champignon, Ananas servi avec légumes, riz et Sauce aigre doux",
      },
    
      {
        name: "Plat Spécial Assitana",
        prix: 80,
        comp:
          "Fillet de Bœuf et blanc Poulet, Sauce au choix : Sauce champignon/requefort/poivre (Servi avec garniture)",
      },
    ],
    imgs: [require("./assets/15.png"),require("./assets/vol.jpg")],
  },
  {
    Title: "Brochettes",
    elements: [
      { name: "Viande hachée", prix: 60, comp: "" },
      { name: "Poulet", prix: 55, comp: "" },
      { name: "Merguez", prix: 55, comp: "" },
      { name: "Mixte", prix: 65, comp: "" },
    ],
   imgs: [require("./assets/broch.jpeg"),require("./assets/brochh.jpg"),require("./assets/broc.png")],
  },
  {
    Title: "Asiatique",
    elements: [
      {
        name: "Rouleux de printemps",
        prix: 40,
        comp:
          "Galette de riz, légumes, Poulet, crevette, surimi, menthe, cacouette, Sauce vietnamienne",
      },
    ],
    imgs: [require("./assets/rol.jpg")],
  },

  {
    Title: "Nouilles",
    elements: [
      { name: "Nouilles Bœuf", prix: 65, comp: "" },
      { name: "Nouilles Poulet", prix: 60, comp: "" },
      { name: "Nouilles Crevettes", prix: 70, comp: "" },
      {
        name: "Riz cantonais vietnamienne",
        prix: 70,
        comp: "Riz, crevettes, Poulet, poivron, champignon, carottes",
      },
      {
        name: "Riz saute crevettes vietnamienne",
        prix: 65,
        comp: "Riz, crevettes avec epices vietnamiennes",
      },
    ],
    imgs: [require("./assets/nol.jpg"), require("./assets/nol2.jpg")],
  },

  {
    Title: "Sizzling",
    elements: [
      {
        name: "Poulet sizzling ",
        prix: 70,
        comp: "Poulet, champignon, épice vietnamienne(plaque chaufante)",
      },
      {
        name: "Bœuf sizzling ",
        prix: 75,
        comp: "Bœuf, champignon, épice vietnamienne(plaque chaufante)",
      },
      {
        name: "Fruit de mer sizzling ",
        prix: 80,
        comp:
          "Fruit de mer, poisson blanc, champignon, épice vietnamienne (plaque chaufante)",
      },
    ],
    imgs: [require("./assets/siz.jpg"), require("./assets/siz2.jpg"),require("./assets/siz3.jpg")],
  },

  {
    Title: "Spécialité Marocaine",
    elements: [
      {
        name: "Tajine de Bœuf",
        prix: 55,
        comp: "Viande, pruneau, amande, œufs, oignon",
      },
      {
        name: "Tajine de Poulet",
        prix: 45,
        comp: "Poulet, Citron confit, olives, frites",
      },
    ],
    imgs: [require("./assets/taj.jpg"), require("./assets/taj2.jpg")],
  },
  {
    Title: "Couscous \n'Chaque Vendredi' ",
    elements: [
      {
        name: "Couscous Viande",
        prix: 50,
        comp: "Viande, légumes (servi avec lben)",
      },
      {
        name: "Couscous tfaya",
        prix: 50,
        comp: "Viande, tfaya (servi avec lben)",
      },
      {
        name: "Couscous de Poulet",
        prix: 45,
        comp: "Poulet, légumes (servi avec lben)",
      },
      {
        name: "Couscous tfaya",
        prix: 45,
        comp: "Poulet, tfaya (servi avec lben)",
      },
    ],
    imgs: [require("./assets/cous.jpg"), require("./assets/cous2.jpg")],
  },

  {
    Title: "Fast Food",
    elements: [
      {
        name: "SANDWICH PAIN MAISON OU PAIN TORTILLA (SERVI AVEC FRITES)",
        comp: "",
      },
      {
        name: "Parisien",
        prix: 42,
        comp:
          "Salade tomate, cheddar, jambon, double steak, ouefs, Sauce au choix avec pain maison ou tortilla",
      },
      {
        name: "Royal",
        prix: 42,
        comp:
          "Salade, tomate, cheddar, steak, Poulet mariné, Sauce au choix avec pain maison ou tortilla",
      },
      {
        name: "Assitana",
        prix: 45,
        comp:
          "Salade, tomate, cheddar, dinde, steak, galette pomme de terre Sauce au choix avec pain maison ou tortilla",
      },
      {
        name: "Ciabatta Dinde",
        prix: 38,
        comp:
          "Salade tomate, cheddar, escalope de dinde, jambon, Sauce au choix avec pain ciabatta",
      },
      {
        name: "Ciabatta Viande hachée",
        prix: 40,
        comp:
          "Salade tomate, cheddar, Viande hachée, Sauce au choix avec pain ciabatta",
      },
      {
        name: "Ciabatta Tender",
        prix: 42,
        comp:
          "Salade tomate, cheddar, escalope de dinde, jambon, tender, Sauce au choix avec pain ciabatta",
      },
    ],
    imgs: [require("./assets/san1.jpg"), require("./assets/san.jpg"), require("./assets/san1.jpeg")],
  },

  {
    Title: "Burger",
    elements: [
      { name: "SERVI AVEC FRITES", comp: "" },
      {
        name: "Chesse burguer",
        prix: 30,
        comp: "Salade, tomate, cheddar, steak, Sauce au choix",
      },
      {
        name: "Double cheese",
        prix: 35,
        comp: "Salade, tomate, double fromage, double steak, Sauce au choix",
      },
      {
        name: "Chicken burguer",
        prix: 30,
        comp: "Salade, tomate, cheddar, Poulet",
      },
      {
        name: "Eggs burguer",
        prix: 38,
        comp: "Salade, tomate, cheddar, jambon, steak, ouefs, Sauce au choix",
      },
      {
        name: "Assitana burguer",
        prix: 42,
        comp:
          "Salade, tomate, cheddar, galette pommes de terre, steak, jombon, Sauce au choix",
      },
    ],
    imgs: [require("./assets/bur.jpg"), require("./assets/bur1.jpg")],
  },

  {
    Title: "Poutine",
    elements: [
      {
        name: "Poutine dinde",
        prix: 30,
        comp: "Dinde, frite, fromage, Sauce fromagére",
      },
      {
        name: "Poutine Viande hachée",
        prix: 32,
        comp: "Viande hachée, frite, fromage, Sauce fromagére",
      },
      {
        name: "Poutine mixte",
        prix: 35,
        comp: "Dinde, Viande hachée, frite, fromage, Sauce froagére",
      },
    ],
    imgs: [require("./assets/pout.jpg"), require("./assets/pout1.jpeg")],
  },

  {
    Title: "Nugget",
    elements: [
      { name: "6 piéces", prix: 20, comp: "" },
      { name: "10 piéces", prix: 30, comp: "" },
      { name: "Assiette frites", prix: 10, comp: "" },
    ],
    imgs: [require("./assets/nug.jpg"), require("./assets/nug1.jpg")],
  },

  {
    Title: "Panini",
    elements: [
      { name: "SERVIS AVEC FRITES"},
      { name: "Panini thon", prix: 25, comp: "thon, fromage, Sauce au choix" },
      { name: "Panini dinde", prix: 26, comp: "dinde, fromage, Sauce au choix" },
      {
        name: "Panini Viande hachée",
        prix: 26,
        comp: "Viande hachée, fromage, Sauce au choix",
      },
      {
        name: "Panini mixte",
        prix: 8,
        comp: "Dinde, Viande hachée, fromage, Sauce au choix",
      },
      {
        name: "Panini Fruits de mer",
        prix: 30,
        comp: "Fruits de mer, fromage, Sauce au choix",
      },
    ],
    imgs: [require("./assets/pan.png"), require("./assets/pan.jpg")],
  },

  {
    Title: "Glaces",
    elements: [
      {name :"Citron, Fraise, Pistache, Caramel, Nougat, Vanille, Chocolat ..."},
      { name: "1 Boule", prix: 11, comp: " " },
      { name: "2 Boules", prix: 21, comp: " " },
      { name: "3 Boules", prix: 30, comp: " " },
      { name: "4 Boules", prix: 42, comp: " " },
      { name: "Milk Shake", prix: 28, comp: " " },
      { name: "Orange Shake", prix: 26, comp: " " },
      { name: "Strawberry Shake", prix: 28, comp: " " },
      { name: "Panaché", prix: 27, comp: " " },
      { name: "Coupe Assitana glaces, Fruits frais", prix: 48, comp: " " },
    ],
    imgs: [require("./assets/glac.jpg"), require("./assets/glac1.jpg")],
  },

  {
    Title: "Smoothies",
    elements: [
      {
        name: "Smoothies fraise",
        prix: 27,
        comp: "Yaourt, lait, Mixer, fraise, slays fraise",
      },
      {
        name: "Smoothies bananes",
        prix: 27,
        comp: "Yaourt, lait, Mixer bananes, slays bananes",
      },
      {
        name: "Smoothies Chocolat",
        prix: 28,
        comp: "Créme fraiche, lait Chocolat, créme Chantilly",
      },
      {
        name: "Smoothies fragola",
        prix: 29,
        comp: "Créme fraiche, toping fraise, lait, créme Chantilly",
      },
    ],
    imgs: [require("./assets/smooth.jpg"), require("./assets/smooth1.jpg")],
  },

  {
    Title:'Gaufres',
    elements: [
    {name: "Gaufres nature",prix:16,comp: ""},
    {name: "Gaufres miel",prix:18,comp: ""},
    {name: "Gaufres nutella",prix:22,comp: ""},
    {name: "Gaufres nutella bananes",prix:25,comp: ""},
    {name: "Gaufres nutella bueno",prix:28,comp: ""},
    {name: "Gaufres Fruit frais",prix:30,comp: ""},
    ],
    imgs:[
    require('./assets/gauf1.jpeg'),
    require('./assets/gauf.jpg'),
    ]
    },


    {
        Title:'WAFFLE BUBBLE',
        elements: [
        {name: "La Frutella",prix:35,comp: "*Base nutella + Chantilly \n*Choisis 1 Fruit (selon la saison) \n*Choisis 1 coulis fraise ou Chocolat ou Caramel"},
        {name: "Supplément Frutella : Coulis",prix:6,comp: ""},
        {name: "La Gouramnde",prix:45,comp: "*Base nutella + Chantilly \n*Choisis 1 gourmande oreo/bueno \n*Choisis 1 glace vanille ou fraise ou Caramel ou pistache ..."},
        {name: "Supplément Gourmande : Glace",prix:15,comp: ""},
        ],
        imgs:[
        require('./assets/wafl.jpg'),
        require('./assets/wafl1.jpg'),
        ]
        },


        {
            Title:'Dessert',
            elements: [
            {name: "Tiramisu",prix:25,comp: ""},
            {name: "Salade Fruits",prix:27,comp: ""},
            {name: "Raib nature",prix:11,comp: ""},
            {name: "Raib Fruits frais",prix:18,comp: ""},
            {name: "Raib Fruits secs",prix:21,comp: ""},
            {name: "Raib mixte",prix:25,comp: ""},
            {name: "Coupe assitana",prix:45,comp: ""},
            
            
            ],
            imgs:[
            require('./assets/des.jpg'),
            require('./assets/des1.jpg'),
            ]
            },


            {
                Title:'Crépe Sucré',
                elements: [
                {name: "Crépe nutella",prix:24,comp: ""},
                {name: "Crépe nutella banane",prix:26,comp: ""},
                {name: "Crépe nutella buenno",prix:28,comp: ""},
                {name: "Crépe miel amandes ou noix ",prix:23,comp: ""},
                {name: "Crépe Amlou .",prix:28,comp: ""},
                {name: "Crépe Caramel amandes ou noix",prix:25,comp: ""},
                {name: "Crépe sucre",prix:18,comp: ""},
                {name: "Crépe Assitana",prix:38,comp: "Nutella, 1 Boule de glace au choix , Chantilly"},
                
                
                ],
                imgs:[
                require('./assets/crepe1.jpg'),
                require('./assets/crepe2.jpg'),
                require('./assets/crepe3.jpg'),
                require('./assets/crepe4.jpg'),
                ]
                },


                {
                    Title:'Crépe Salée',
                    elements: [
                    {name: "Crépe jambon fromage ouef",prix:28,comp: ""},
                    {name: "Crépe  Poulet fromage champigbonse",prix:28,comp: ""},
                    {name: "Crépe Viande hachée Sauce blanche fromage",prix:30,comp: ""},
                    {name: "Crépe crevette ",prix:30,comp: ""},
                    
                    
                    ],
                    imgs:[
                    require('./assets/crepes1.jpeg'),
                    require('./assets/crepes2.png'),
                    require('./assets/crepesal.png'),

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
