import React, { Component } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet,Alert } from 'react-native';
import {
  Container,
  Content,
} from "native-base";

import LinearGradient from 'react-native-linear-gradient';
export default class SideScreen extends Component {
  playstore(){
  Alert.alert("working!!!")
}
aboutus(){
this.props.navigation.navigate('Aboutus')
}
    render() {

        return (
           
    
       
        <LinearGradient
        colors={['#fff3e0','#ff6f00', '#ffc107','#ffd54f']}
        style={{flex: 1}}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
      >
         
         <Container  style={{backgroundColor:'transparent'}}>
                {/* <Content > */}
                    <View style={{top:10}}>
                    <Image
                        
                        style={{ height: 200,
                          width: 200,
                          position: "absolute",
                          alignSelf: "center",
                          justifyContent:"center",}}
                        source={require
                            (
                                '../mainScreen/assets/meditationlogo.png'
                            )}
                    />
                               <Text style={{ fontSize:30,color:"white" ,fontFamily:'AmericanTypewriter-Condensed',top:200,textAlign:"center"}}> Meditation</Text>

                    </View>

                    

                    <View style={{top:250}}>
                        <TouchableOpacity onPress={() => this.aboutus()}>
                            <View>
                                <View>
                                    <Text style={{position:"absolute",left:80,top:10,fontSize:22,color:"white"}}>
                                        About Us
                                </Text>
                                    <Image
                                        style={{ width: 30,
                                          height: 30,margin:10
                                          }}
                                        source={require
                                            (
                                                '../mainScreen/assets/about.png'
                                            )}
                                    >

                                    </Image>
                                </View>
                            </View>

                        </TouchableOpacity >

                        <TouchableOpacity onPress={() => this.playstore()}>
                            <View>
                                <View>
                                <Text style={{position:"absolute",left:80,top:10,fontSize:22,color:"white"}}>
                                        Rate App
                                </Text>
                                    <Image
                                        style={{ width: 30,
                                          height: 30,margin:10
                                          }}
                                        source={require
                                            (
                                                '../mainScreen/assets/icons8-star-64.png'
                                            )}
                                    >

                                    </Image>
                                </View>
                            </View>

                        </TouchableOpacity >
                        </View>
                        {/* </Content>                */}
            </Container>
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
