import { Card } from 'native-base'
import React from 'react'
import { View, Text, Image, StyleSheet, YellowBox, ScrollView } from 'react-native'
import Swiper from 'react-native-swiper'




const Cathegories = (props) => {
   
    return(
        <View style={styles.container}>
           
            <Card style={{ marginBottom:20, flex:1}}>
            <View style={styles.sliderContainer}>
                <Swiper autoplay height={200}>
                    
                    {
                        props.Data.imgs.map(el => (
                            <View style={styles.slide}>
                        <Image
                            source={el}
                            resizeMode="cover"
                            style={styles.sliderImage}
                        />
                        
                         </View>
                        ))
                    }
                </Swiper>
              
            </View>
            <Text style={styles.title}>{props.Data.Title}</Text>
                <ScrollView style={{flex:1, marginBottom:5}}>
                {
                   props.Data.elements.map(el => (
                        <View style={{flex:1, flexDirection:"column", paddingHorizontal:10}}>
                                <View style={{ flexDirection:'row', justifyContent:'space-between', marginTop:10}}>
                                    <Text style={{color:'#953C1A', fontSize:15, fontWeight:'bold'}}>{el.name}</Text>
                                    <Text>{el.prix} DH</Text>
                                </View>
                                <Text style={{fontSize:10}}>{el.comp}</Text>
                               
                         </View>
                         

                    ))
                    
                }
                </ScrollView>
            </Card>
          
           
              
           
        </View>




    )
}



const Cath = (prop) => {

    return(
        <View style={styles.container}>

            <Card style={{ marginBottom:20, flex:1}}>
                <View style={styles.sliderContainer}>
                    <Swiper autoplay height={200}>

                        {
                            prop.Data.imgs.map(el => (
                                <View style={styles.slide}>
                                    <Image
                                        source={el}
                                        resizeMode="cover"
                                        style={styles.sliderImage}
                                    />

                                </View>
                            ))
                        }
                    </Swiper>

                </View>
                <Text style={styles.title}>{prop.Data.Title}</Text>
                <ScrollView style={{flex:1, marginBottom:5}}>
                    {
                        prop.Data.elements.map(el => (
                            <View style={{flex:1, flexDirection:"column", paddingHorizontal:10}}>
                                <View style={{ flexDirection:'row', justifyContent:'space-between', marginTop:10}}>
                                    <Text style={{color:'#953C1A', fontSize:15, fontWeight:'bold'}}>{el.name}</Text>
                                    <Text>{el.prix} DH</Text>
                                    //hna ziid li bghit
                                    <Text>{el.prix2} DH</Text>
                                    <Text>{el.prix3} DH</Text>
                                </View>
                                <Text style={{fontSize:10}}>{el.comp}</Text>

                            </View>


                        ))

                    }
                </ScrollView>
            </Card>




        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        
    },
    sliderContainer:{
        height:200,
        width:'90%',
        marginTop:10,
        justifyContent: 'center',
        alignSelf:'center',
        borderRadius:8
    },
    wrapper:{},

    slide:{
        flex:1,
        justifyContent:'center',
        backgroundColor:'transparent',
        borderRadius:8,
    },
    sliderImage:{
        height:'100%',
        width:'100%',
        alignSelf:'center',
        borderRadius:8
    },
    title:{
        color:'#953C1A',
        fontSize:30,
        fontWeight:'bold',
        marginTop:5,
        fontFamily:'monospace',
        marginBottom:20,
        paddingLeft:10
    
    },
    soustitre:{
        color:'#953C1A',
        fontSize:15,
        fontWeight:'bold',
        marginTop:5,
        fontFamily:'monospace',
        marginBottom:20,
        paddingLeft:10
    }

})

export default Cathegories;