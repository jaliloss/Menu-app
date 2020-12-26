import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import Cathegories from './components/Cathegories'
const Data = [
  {
      Title:'PETIT DEJEUNER',
      elements: [
          {
              name: "Omelette Nature ",
              prix: 24,
              comp: ""
          },
          {
              name: "Omelette au Jambon",
              prix: 26,
              comp: "2oeufs+huile d’olive+olive noir+jambon+pain"
          },
          {
              name: "Omelette au Champignon",
              prix: 17,
              comp: "2oeufs+huile d’olive+olive noir+champignon+pain"
          },
          {
              name: "Omlette Espagnole ",
              prix: 19 ,
              comp: "2ouefs+poivron rouge et vert+oignon+tomate+huile d’olive+olive noir+fromage+pain"
          },
          {
              name: "Omlette crevette :",
              prix: 19,
              comp: "2oeufs+crevette+huile d’olive+olive noir+fromage+pain"
          },
          {
              name: "Cake aux choix",
              prix: 20,
              comp: "Orange,Citron,Vanille,Amandes,choconoix"
          },
          {
              name: "Fassi",
              prix: 22,
              comp: "2oeufs+khlie+pain"
          },
          {
            name: "Chakchoucka à l’œuf",
            prix: 25,
            comp: "+Boisson + Eau sidi Ali"
        },
        {
            name: "Chakchouka à l’",
            prix: 25,
            comp: "2ouefs+tomate+khlie+huile d’olive+olive noir+pain"
        },
        {
            name: "Catalan",
            prix: 25,
            comp: "tranche espagnol+1oeuf+huile d’olive+olive noir+pain"
        },
        {
            name: "Croque damme",
            prix: 25,
            comp: "3pain demi+1ouef+fromage rappé+jombon+huile d’olive+olive noir"
        },
        {
            name: "Croque monsieur",
            prix: 25,
            comp: "4pain demi+2oeufs+fromage rappé+jombon+huile d’olive=olive noir"
        },
        {
            name: "Marocain",
            prix: 22,
            comp: "(harcha+maloui+huile d’olive+olive noir+1fromage+miel+confiture"
        },
        {
            name: "Croque monsieur",
            prix: 25,
            comp: "4pain demi+2oeufs+fromage rappé+jombon+huile d’olive=olive noir"
        },
        {
            name: "Croque monsieur",
            prix: 25,
            comp: "4pain demi+2oeufs+fromage rappé+jombon+huile d’olive=olive noir"
        },
        {
            name: "Croque monsieur",
            prix: 25,
            comp: "4pain demi+2oeufs+fromage rappé+jombon+huile d’olive=olive noir"
        },
        {
            name: "Croque monsieur",
            prix: 25,
            comp: "4pain demi+2oeufs+fromage rappé+jombon+huile d’olive=olive noir"
        },
        {
            name: "Croque monsieur",
            prix: 25,
            comp: "4pain demi+2oeufs+fromage rappé+jombon+huile d’olive=olive noir"
        },
        {
            name: "Croque monsieur",
            prix: 25,
            comp: "4pain demi+2oeufs+fromage rappé+jombon+huile d’olive=olive noir"
        },
        {
            name: "Croque monsieur",
            prix: 25,
            comp: "4pain demi+2oeufs+fromage rappé+jombon+huile d’olive=olive noir"
        },
        {
            name: "Croque monsieur",
            prix: 25,
            comp: "4pain demi+2oeufs+fromage rappé+jombon+huile d’olive=olive noir"
        },
        {
            name: "Croque monsieur",
            prix: 25,
            comp: "4pain demi+2oeufs+fromage rappé+jombon+huile d’olive=olive noir"
        },
        {
            name: "Croque monsieur",
            prix: 25,
            comp: "4pain demi+2oeufs+fromage rappé+jombon+huile d’olive=olive noir"
        },        
        {
            name: "Marocain :",
            prix:22,
            comp: "(harcha+maloui+huile d’olive+olive noir+1fromage+miel+confiture)"
        },
        
        {
            name: "Brunch :",
            prix:22 ,
            comp: "pain blédure+sauce tomate+jombon+fromage+origan+huile d’olive+olive noir"
        },
        {
            name: "Beldi Gold :",
            prix:22 ,
            comp: "amlou+huile d’olive+olive noir+jben+pain grillé"
        },
        {
            name: "Kids enfants :",
            prix:22 ,
            comp: "conflex+lait froid+l’eau+crépe sucrée"
        },
        {
            name: "Parisien :",
            prix:22 ,
            comp: "pannier de 3 mini viennoiserie"
        },
        {
            name: "Assitana :",
            prix:22 ,
            comp: "Omlette + 3merguez+club sandwich+gaufre+panna-cotta"
        },
        {
            name: "Le light :",
            prix:22 ,
            comp: "toast grillé+fromage+fillet de dinde fumé+huile d’olive"
        },
        {
            name: "Toast :",
            prix:22 ,
            comp: "toast grille aux choix : confiture,amlou,beure,fromage,miel,nutella"
        },
        {
            name: "Gourmand :",
            prix:22 ,
            comp: "Omlette+3tranche tortiné jben,nutella,confiture+ 3pain cake au fruit de saison+pomme noisette+panna-cotta"
        },
        {
            name: "Royal :",
            prix:22 ,
            comp: "2mini batbout au jambon œuf+fruit de saison+creme amande +pomme noisette+panna-cotta"
        },
        {
            name: "Rf issa :",
            prix:22 ,
            comp: "2harcha complet+fruit sec+huile d’olive"
        },
      ],
      imgs:[
          require('./assets/pic1.jpg'),
          require('./assets/pic2.jpg'),
          require('./assets/pic3.jpg')
      ]
  },
  {
    Title:' DEJEUNER',
    elements: [
        {
            name: "Tacos",
            prix: 30,
            comp: "2 oufs*hile d'olive* olive noir * pain"
        },
        {
            name: "Tacos",
            prix: 30,
            comp: "2 oufs*hile d'olive* olive noir * pain"
        },
        {
            name: "Tacos",
            prix: 30,
            comp: "2 oufs*hile d'olive* olive noir * pain"
        },
        {
            name: "Tacos",
            prix: 30,
            comp: "2 oufs*hile d'olive* olive noir * pain"
        },
        {
            name: "Tacos",
            prix: 30,
            comp: "2 oufs*hile d'olive* olive noir * pain"
        },
        {
            name: "Tacos",
            prix: 30,
            comp: "2 oufs*hile d'olive* olive noir * pain"
        },
        {
            name: "coffe",
            prix: 30,
            comp: "2 oufs*hile d'olive* olive noir * pain"
        },
    ],
    imgs:[
        require('./assets/pic4.jpg'),
        require('./assets/pic5.jpg'),
       
    ]
}

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
