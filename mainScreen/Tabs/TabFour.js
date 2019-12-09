import React, { Component } from 'react';
import {View,Text,ImageBackground,TouchableOpacity,StyleSheet} from 'react-native';
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

