import React, { Component } from 'react';
import {View,Text,ImageBackground,TouchableOpacity,StyleSheet,Image} from 'react-native';
import { FlatGrid } from 'react-native-super-grid';
import { cloneNode } from '@babel/types';
export default class TabTwo extends Component {
    render(){
        const items = [
            { name: 'Nature',  image: require('../assets/test.jpg') },
             { name: 'Nature', image: require('../assets/123.jpeg') },
            { name: 'Nature', image: require('../assets/rainy.jpg') }, 
            { name: 'Nature', image: require('../assets/WellnessAssociation.jpg') },
            { name: 'Nature', image: require('../assets/flute2.jpg') },
             { name: 'Nature', image: require('../assets/load.jpg') },
            { name: 'Nature', image: require('../assets/waterfalls.jpg') },
             { name: 'Nature', image: require('../assets/forest.jpg') },
            { name: 'Nature', image: require('../assets/bird.jpg') }, 
            { name: 'Nature', image: require('../assets/1.jpg') },
            { name: 'Nature', image: require('../assets/peaceful-stones-1.jpg') },
           { name: 'Nature', image: require('../assets/temple.jpg') }, 
            
           
          ];
        return(
            <ImageBackground
        source={require("../assets/railway-track-sunrise-max-neivandt.jpg")}
        style={{ width: "100%", height: "100%" }}
        >
                 <FlatGrid
        itemDimension={100}
        items={items}
        style={styles.gridView}
        // staticDimension={300}
        // fixed
        // spacing={20}
        renderItem={({ item, index }) => (
          <View style={[styles.itemContainer, {}]}>

          <TouchableOpacity style={styles.touchableOpacityStyle}>
              <ImageBackground source={item.image} style={{ width: 110, height: 120 }} imageStyle={{ borderRadius: 5,resizeMode:"cover" }} >
                  <View style={{position:"absolute",top:0,bottom:0,left:0,right:0,backgroundColor:'rgba(235, 129, 13, 0.5)',width:30,height:30,justifyContent:"center",alignContent:"center",borderRadius:15}}>
                  <Image source={require ('../assets/icons8-lock-orientation-50.png')} style={{ height: 20, width: 20,justifyContent:"center",alignContent:"center",left:5}} />
                  </View>
                  <View style={{width:110,height:25,backgroundColor:'rgba(235, 109, 13, 0.5)',borderRadius:5,justifyContent:"center",top:95,}}>
                  <Text style={styles.itemName}>{item.name}</Text>
                  </View>
              </ImageBackground>

          </TouchableOpacity>


      </View>
        )}
      />
      </ImageBackground>
         
        );
    }
}
const styles = StyleSheet.create({
    gridView: {
      marginTop: 10,
      flex: 1,
    },
    itemContainer: {
      justifyContent:"center",
      borderRadius: 5,
      height: 120,
      alignContent:"center",
    },
    itemName: {
      fontSize: 14,
        color: "white",
        // fontWeight: "bold",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center"
    },
    itemCode: {
      fontWeight: '600',
      fontSize: 12,
      color: '#fff',
    },
  });


