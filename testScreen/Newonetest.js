import React, { Component } from 'react';
import {View,Text,Image,TouchableOpacity,StyleSheet} from 'react-native';
export default class Newonetest extends Component {
    render(){
      let uri = 'https://i.ibb.co/48R5w3v/backnewderana-min-compressor.jpg';
        return(
            <Image 
        source={{uri}}
        style={{ width: "50%", height: "50%" ,justifyContent:"center"}}
        >
      </Image>
         
        );
    }
}


