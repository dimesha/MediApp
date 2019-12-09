
import React, { Component } from 'react';
import main from './mainScreen/MainScreen';
import testScreen from './testScreen/TestScreen';
import newtest from './testScreen/Newonetest';
import flashScreen from './flashScreen/FlashScreen'
import { createAppContainer } from 'react-navigation';
import { createStackNavigator, Header } from 'react-navigation-stack';
import { View } from 'native-base';

const RootStack = createStackNavigator({
  MainScreen: {
  screen: main,
  navigationOptions: { header: null }

},
TestScreen: {
  screen: testScreen,
  navigationOptions: { header: null }

},
Newonetest: {
  screen: newtest,
  navigationOptions: { header: null }

},
FlashScreen: {
  screen: flashScreen,
  navigationOptions: { header: null }

},

},

{
  initialRouteName: 'FlashScreen'

},
{
  headerMode: 'screen'
},
);


const AppContainer = createAppContainer(RootStack);

export default class App extends Component {
  render() {
    return (
      < View style={{ flex: 1 }}>

        <AppContainer />
       

      </View>
    )
  }
}
