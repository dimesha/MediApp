import React, { Component } from 'react';
import { Container, Header,Footer, FooterTab, Button,Text,Left,Right,Body,Title,Icon,Drawer,View, StyleSheet, Dimensions } from 'react-native';
import { TabView, SceneMap,PagerScroll } from 'react-native-tab-view';
import {ImageBackground,Image,StatusBar,Slider,Platform,TouchableOpacity} from 'react-native';
import Tab1 from '../mainScreen/Tabs/tabOne';
import Tab2 from '../mainScreen/Tabs/TabTwo';
import LinearGradient from 'react-native-linear-gradient';
 
export default class TestScreen extends Component {
  state = {
    index: 1,
    routes: [
      { key: 'tab1', title: 'Tab1' },
      { key: 'tab2', title: 'Tab2' },
    ],
  };

  
  render() {
    return (
        
      <TabView
       scrollEnabled
        navigationState={this.state}
        renderScene={SceneMap({
          tab1: Tab1,
          tab2: Tab2,
        })}
        onIndexChange={index => this.setState({ index })}
        initialLayout={{ width: Dimensions.get('window').width }}
      
        
      />
    
     
    );
  }
}
 
const styles = StyleSheet.create({
  scene: {
    flex: 1,
  },
  linearGradient: {
    flex: 1,
    paddingLeft: 15,
    paddingRight: 15,
    borderRadius: 5
  },
  
});