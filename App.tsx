import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import Cathegories from './components/Cathegories'
const Data = [
  {
      Title:'PETIT DEJEUNER',
      elements: [
          {
              name: "coffe",
              prix: 12,
              comp: "2 oufs*hile d'olive* olive noir * pain"
          },
          {
              name: "coffe",
              prix: 12,
              comp: "2 oufs*hile d'olive* olive noir * pain"
          },
          {
              name: "coffe",
              prix: 12,
              comp: "2 oufs*hile d'olive* olive noir * pain"
          },
          {
              name: "coffe",
              prix: 12,
              comp: "2 oufs*hile d'olive* olive noir * pain"
          },
          {
              name: "coffe",
              prix: 12,
              comp: "2 oufs*hile d'olive* olive noir * pain"
          },
          {
              name: "coffe",
              prix: 12,
              comp: "2 oufs*hile d'olive* olive noir * pain"
          },
          {
              name: "coffe",
              prix: 12,
              comp: "2 oufs*hile d'olive* olive noir * pain"
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
