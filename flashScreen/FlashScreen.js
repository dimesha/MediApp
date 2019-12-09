import React, { Component } from 'react';
import {View,Image,Animated,Dimensions,StyleSheet,Text,StatusBar} from 'react-native';
import { StackActions, NavigationActions } from 'react-navigation'

const h = Dimensions.get('window').height;
const height = h * 2;
export default class FlashScreen extends Component{
    circle = new Animated.Value(0);
    logo = new Animated.Value(0);

    componentDidMount(){
        Animated.sequence([
            Animated.timing(this.circle,{
                toValue:1,
                duration:3000,    
            }),
            Animated.timing(this.logo,{
                toValue:1,
                duration:1000,    
            }),
            
        ]).start(()=>{this.props.navigation.navigate("MainScreen")})
    
    }
    render(){
        const translateY = this.circle.interpolate({
            inputRange: [0, 1],
            outputRange: [-height, 0]
        });
        const tranY = this.logo.interpolate({
            inputRange: [0, 1],
            outputRange: [h, 0]
        });
        return(
            <View style={styles.con}>
               <Animated.Image source={require("../mainScreen/assets/meditationlogo.png")} style={[styles.icon , { transform :[{ translateY : tranY}] }]}/>
           <Animated.View style={[styles.circle, { transform : [{ translateY }] }] }/>
           <Text style={{ fontSize:30,color:"white" ,fontFamily:'AmericanTypewriter-Condensed'}}> Meditation</Text>
           <StatusBar backgroundColor="#ff9100" barStyle="light-content" />
            </View>
        );
    }
   
}

const styles = StyleSheet.create({
    icon : {
    width:100,
    height:100,
    // justifyContent:"center",
    // alignItems:"center",
    // left:40
    },
    con : {
        flex:1,
        backgroundColor:'white',
        justifyContent:"center",
        alignItems: 'center'
    },
    circle : {
width: height,
height,
backgroundColor: '#ff9100',
borderRadius: h,
position : "absolute",
zIndex: -1,
}
})