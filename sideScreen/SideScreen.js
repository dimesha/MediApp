import React, { Component } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
export default class SideScreen extends Component {
    render() {

        return (
           
        // <ImageBackground
        //     source={require("../mainScreen/assets/sidescreenimg.jpg")}
        //     style={{ width: "100%", height: "100%" }}>
        // </ImageBackground>
       
        <LinearGradient
        colors={['#fff3e0','#ff6f00', '#ffc107','#ffd54f']}
        style={{flex: 1}}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
      >
         
        <Text style={styles.text}>Hello There</Text>
        </LinearGradient>
           
         
        );
    }
}
const styles = StyleSheet.create({
    text: {
      fontSize: 56,
      position: 'absolute',
      left: '15%',
      top: '40%',
      color: 'white',
      fontWeight: 'bold'
    }
  });
// const styles = StyleSheet.create({
//     gridView: {
//       marginTop: 10,
//       flex: 1,
//     },
//     itemContainer: {
//       justifyContent:"center",
//       borderRadius: 5,
//       height: 120,
//       alignContent:"center",
//     },
//     itemName: {
//       fontSize: 14,
//         color: "white",
//         // fontWeight: "bold",
//         justifyContent: "center",
//         alignItems: "center",
//         textAlign: "center"
//     },
//     itemCode: {
//       fontWeight: '600',
//       fontSize: 12,
//       color: '#fff',
//     },
//   });
