import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import Cathegories from './components/Cathegories'
const Data = [
  {
      Title:'Petit Dèjeuner',
      elements: [
          {
              name: "Omelette Nature ",
              prix: 24,
              comp: ""
          },
          {
              name: "Omelette au Jambon",
              prix: 26,
              comp: "2Œufs, huile d’olive, olive noir, jambon, pain"
          },
          {
              name: "Omelette au Champignon",
              prix: 17,
              comp: "2Œufs, huile d’olive, olive noir, champignon, pain"
          },
          {
              name: "Omlette Espagnole ",
              prix: 19 ,
              comp: "2Œefs, poivron rouge et vert, oignon, tomate, huile d’olive, olive noir, fromage, pain"
          },
          {
              name: "Omlette crevette :",
              prix: 19,
              comp: "2Œufs, crevette, huile d’olive, olive noir, fromage, pain"
          },
          {
              name: "Cake aux choix",
              prix: 20,
              comp: "Orange, Citron, Vanille, Amandes, Choconoix"
          },
          {
              name: "Fassi",
              prix: 22,
              comp: "2Œufs, khlie, pain"
          },
          {
            name: "Chakchoucka à l’œuf",
            prix: 25,
            comp: "Boisson ,  Eau sidi Ali"
        },
        {
            name: "Chakchouka",
            prix: 25,
            comp: "2Œefs, tomate, khlie, huile d’olive, olive noir, pain"
        },
        {
            name: "Catalan",
            prix: 25,
            comp: "Tranche espagnol, 1oeuf, huile d’olive, olive noir, pain"
        },
        {
            name: "Croque damme",
            prix: 25,
            comp: "3pain demi, 1ouef, fromage rappé, jombon, huile d’olive, olive noir"
        },
        {
            name: "Croque monsieur",
            prix: 25,
            comp: "4pain demi, 2Œufs, fromage rappé, jombon, huile d’olive, olive noir"
        },
        {
            name: "Marocain",
            prix: 22,
            comp: "Harcha, maloui, huile d’olive, olive noir, fromage, miel, confiture"
        },
                
     

        {
            name: "Brunch :",
            prix:22 ,
            comp: "pain blédure, sauce tomate, jombon, fromage, origan, huile d’olive, olive noir"
        },
        {
            name: "Beldi Gold :",
            prix:22 ,
            comp: "amlou, huile d’olive, olive noir, jben, pain grillé"
        },
        {
            name: "Kids enfants :",
            prix:22 ,
            comp: "conflex, lait froid, l’eau, crépe sucrée"
        },
        {
            name: "Parisien :",
            prix:22 ,
            comp: "pannier de 3 mini viennoiserie"
        },
        {
            name: "Assitana :",
            prix:22 ,
            comp: "Omlette ,  3merguez, club sandwich, gaufre, panna-cotta"
        },
        {
            name: "Le light :",
            prix:22 ,
            comp: "toast grillé, fromage, fillet de dinde fumé, huile d’olive"
        },
        {
            name: "Toast :",
            prix:22 ,
            comp: "toast grille aux choix : confiture,amlou,beure,fromage,miel,nutella"
        },
        {
            name: "Gourmand :",
            prix:22 ,
            comp: "Omlette, 3tranche tortiné jben,nutella,confiture,  3pain cake au fruit de saison, pomme noisette, panna-cotta"
        },
        {
            name: "Royal :",
            prix:22 ,
            comp: "2mini batbout au jambon œuf, fruit de saison, creme amande , pomme noisette, panna-cotta"
        },
        {
            name: "Rf issa :",
            prix:22 ,
            comp: "2harcha complet, fruit sec, huile d’olive"
        },
      ],
      imgs:[
          require('./assets/pic1.jpg'),
          require('./assets/pic2.jpg'),
          require('./assets/pic3.jpg')
      ]
  },
  {
    Title:'SALON DE THE',
    elements: [

        {
            name: "Café noir",
            prix: 11,
            comp: ""
        },
        {
            name: "Café aromatisé",
            prix: 16,
            comp: ""
        },
        {
            name: "Café créme",
            prix: 11,
            comp: ""
        },
        {
            name: "Café séparé",
            prix: 13,
            comp: ""
        },
        {
            name: "Café Allongé",
            prix: 13,
            comp: ""
        },
        {
            name: "Capsule nespresso",
            prix: 14,
            comp: ""
        },
        {
            name: "The marocain",
            prix: 11,
            comp: ""
        },
   {
name:"Tisane lipton",prix: 13},
{name:"Tisane verveine",prix: 11},
{ name:"Lait au chocolat",prix: 11},
{ name:"Lait chaud",prix: 11},
{name:"Lait froid",prix: 10},   

    ],
    imgs:[
        require('./assets/pic4.jpg'),
        require('./assets/pic5.jpg'),
       
    ]
},


  {
    Title:' SUPPLEMENT',
    elements: [
        {name: "Soupe marocaine (tchicha)",prix:9},
        {name: "Amlou",prix:12},
        {name: "Omlette nature",prix:10},
        {name: "Omlette fromage",prix:13},
        {name: "Omlette jombon",prix:17},
        {name: "Omlette espagnole",prix:17},
        {name: "Omlette crevette",prix:21},
        {name: "Chakchouka à l’œuf",prix:12},
        {name: "Chakchouka à l’œuf et khlie",prix:24},
        {name: "Maloui ou Harcha",prix:5},
        {name: "Beure ou miel ou confiture",prix:3},
        {name: "Charcuterie Jombon",prix:9},
        {name: "Fromage rappé",prix:8},
        {name: "Fromage fondu",prix:2},
        {name: "Jben",prix:8},
        {name: "Tranche espagnole",prix:9},
        {name: "Créme chantilly",prix:5},
        {name: "Pain au chocolat",prix:6},
        {name: "Créme amandes",prix:8},
        {name: "Baghrir",prix:2},
        {name: "Tost fromage",prix:16},
        {name: "Croque dame/mr",prix:21},
        {name: "Fassi",prix:21},
        {name: "Pannier de mini vinoiserie",prix:11},
        {name: "Lelight",prix:19},
        {name: "Toast",prix:12},
        {name: "Paicéreal petit format",prix:5},
        {name: "Olive noir",prix:3},
        {name: "Huile d’olive",prix:5},
        {name: "Assitana",prix:27},
        {name: "Brunch",prix:19},
        {name: "Gaurmand",prix:26},
        {name: "Royal",prix:26},
    ],
    imgs:[
        require('./assets/pic4.jpg'),
        require('./assets/pic5.jpg'),
       
    ]
},



]

export default function App() {
  return (
    <View style={styles.container}>
    <ScrollView>
      {
        Data.map(el => (
          <Cathegories Data={el} />
        ))
      }
    </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginTop: 30,
    padding:10
   
  },
});
