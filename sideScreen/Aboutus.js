import React, { Component } from 'react';
import { Header, Drawer, Left, Icon, Body, Right } from 'native-base';
import { Button, View, Text, StyleSheet,TouchableOpacity,TextInput,StatusBar,Image,Linking} from 'react-native';
export default class App extends Component {
    
    navigatechannel() {
         this.props.navigation.navigate('ChannelScreen')
     };
    render() {

        return (

            <View style={{ flex: 1, }}>

                <Header style={{ backgroundColor: 'white', borderRadius: 10,marginTop:25 }}>
                    <Left>

                        <TouchableOpacity onPress={() => this.navigatechannel()} style={{width:50,height:50,marginTop:10}}>

                            <Icon name='md-arrow-back' style={{ color: '#039be5' }} />

                        </TouchableOpacity>

                    </Left>
                    <Body>

                        <Text style={{ textAlign: "center", fontSize: 20, color: 'gray', justifyContent: "center", alignContent: "center", left: 30 }}>About Us</Text>

                    </Body>

                </Header>
                <StatusBar barStyle="dark-content" hidden={false} backgroundColor="white" translucent={true} />
                
       
                <View style={styles.container}>
                    <Image
                        style={{ width: 170, height: 170, bottom: 80, justifyContent: "center", alignItems: "center", }}
                        source={require('../mainScreen/assets/meditationlogo.png')}
                    />
                    <View>

                        <Text style={{ fontSize: 20, color: '#424242', width: 320, bottom: 20, textAlign: "center" }}>
                            Meditation
                    </Text>
                        <Text style={{ fontSize: 15, color: '#424242', width: 330, textAlign: "center" }}>
                        Meditation is an application designed to let you watch your watch more relaxing sounds way better with the premium entertainment powered by   "Commercial Technologies Plus".
                    
                            </Text>

                        <Text style={{ fontSize: 12, color: '#424242', width: 320, top: 50, textAlign: "center", justifyContent: "center" }}>
                            A Product by
                    </Text>

                    </View>
                    <Image
                        resizeMode='cover'
                        style={{ width: 200, height: 90, justifyContent: "center", alignItems: "center", top: 30 }}
                        source={require('../mainScreen/assets/123.png')}
                    />


                    <Text style={{ color: 'blue', top: 50 }}
                        onPress={() => Linking.openURL('https://commercialtp.com')}>
                        Commercial Technologies
</Text>

                </View>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#F7F7F8',

    },
});