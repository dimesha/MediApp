import React, { Component } from 'react';
import { Container, Header, Tab, Tabs, ScrollableTab,Footer, FooterTab, Button,Text,Left,Right,Body,Title,Icon,Drawer} from 'native-base';
import {ImageBackground,View,StyleSheet,Image,StatusBar,Slider,Platform,TouchableOpacity,Alert} from 'react-native';
import Sound from 'react-native-sound';
import LinearGradient from 'react-native-linear-gradient';
import SideScreen from '../sideScreen/SideScreen';
import Tab1 from './Tabs/tabOne';
import Tab2 from './Tabs/TabTwo';
import Tab3 from './Tabs/TabThree';
import Tab4 from './Tabs/TabFour';
import Tab5 from './Tabs/TabFive';

export default class TabsScrollableExample extends Component {

  closeDrawer = () => {
    //  this.drawer._root.close()
};

openDrawer = () => {

    this.drawer._root.open()
};

onClose = () => {
    this.setState({
        showTheThing: true
    })
}
  render() {
    return (
      <Drawer

      side="left" ref={(ref) => { this.drawer = ref; }}
      acceptPan={true}
      panOpenMask={1}
      content={<SideScreen navigation={this.props.navigation} />}
      onClose={() => this.closeDrawer()}
      tweenHandler={(ratio) => ({
          main: { opacity: (1 - ratio) / 1 }
      })}>

      <Container>
         
          <Header noShadow style={{backgroundColor:'#ff9100'}}>
          <Left>
            <Button transparent onPress={() => this.openDrawer()}>
            <Image source={require ('./assets/icons8-menu-24.png')} style={{ height: 20, width: 20,}} />
            </Button>
          </Left>
          <Body>
            <Title>Sounds</Title>
          </Body>
          <Right>
            <Button transparent>
            <Image source={require ('./assets/icons8-heart-26.png')} style={{ height: 20, width: 20,}} />
            </Button>
          </Right>
        </Header>
        <StatusBar backgroundColor="#ff9100" barStyle="light-content" />
        {/* <Header hasTabs /> */}
        <ImageBackground
        source={require("./assets/railway-track-sunrise-max-neivandt.jpg")}
        style={{ width: "100%", height: "100%",flex:1 }}
        >   
        <Tabs renderTabBar={()=> <ScrollableTab/>} tabBarUnderlineStyle={{backgroundColor:'#ffff'}} >
          <Tab heading="Tab1" tabStyle={{backgroundColor: '#ff9100'}} textStyle={{color: '#fff'}} activeTabStyle={{backgroundColor: '#ff9100'}} activeTextStyle={{color: '#fff', fontWeight: 'bold'}}>
            <Tab1 navigation={this.props.navigation} />
          </Tab>
          <Tab heading="Tab2" tabStyle={{backgroundColor: '#ff9100'}} textStyle={{color: '#fff'}} activeTabStyle={{backgroundColor: '#ff9100'}} activeTextStyle={{color: '#fff', fontWeight: 'bold'}}>
            <Tab2 navigation={this.props.navigation}/>
          </Tab>
          <Tab heading="Tab3" tabStyle={{backgroundColor: '#ff9100'}} textStyle={{color: '#fff'}} activeTabStyle={{backgroundColor: '#ff9100',}} activeTextStyle={{color: '#fff', fontWeight: 'bold'}}>
            <Tab3 navigation={this.props.navigation}/>
          </Tab>
          <Tab heading="Tab4" tabStyle={{backgroundColor: '#ff9100'}} textStyle={{color: '#fff'}} activeTabStyle={{backgroundColor: '#ff9100'}} activeTextStyle={{color: '#fff', fontWeight: 'bold'}}>
            <Tab4 navigation={this.props.navigation}/>
          </Tab>
          <Tab heading="Tab5" tabStyle={{backgroundColor: '#ff9100'}} textStyle={{color: '#fff'}} activeTabStyle={{backgroundColor: '#ff9100'}} activeTextStyle={{color: '#fff', fontWeight: 'bold'}}>
            <Tab5 navigation={this.props.navigation}/>
          </Tab>
          
        </Tabs>
        
        </ImageBackground>
        
               
        <Footer style={{borderRadius:90}}>
        <LinearGradient colors={['#ECA809', '#CC7E00', '#CF6E07']} style={styles.linearGradient}>
          <FooterTab style={{backgroundColor:"transparent"}}>

            <Button vertical onPress={()=>Alert.alert("playing")}>
            <Image source={require ('./assets/icons8-pause-32.png')} style={{ height: 30, width: 20,}} />
              <Text>Play</Text>
            </Button>
            <Button vertical onPress={()=>Alert.alert("stop")}>
            <Image source={require('./assets/icons8-delete-48.png' )}style={{height: 25,width: 20, }} />
              <Text>Stop</Text>
            </Button>

            <Button vertical onPress={()=>Alert.alert("Timing")}>
            <Image source={require ('./assets/icons8-stopwatch-50.png')} style={{ height: 25,width: 25, }} />
              <Text>Timer</Text>
            </Button>

            <Button vertical onPress={()=>Alert.alert("new")}>
            <Image
          source={require ('./assets/icons8-new-50.png')} style={{ height: 25, width: 25,}} />
              <Text>New</Text>
            </Button>
           
          </FooterTab>
          </LinearGradient>
        </Footer>
       
      </Container>
     </Drawer>
    );
  }
}

var styles = StyleSheet.create({
  linearGradient: {
    flex: 1,
    paddingLeft: 15,
    paddingRight: 15,
    borderRadius: 5
  },
  
  
});
