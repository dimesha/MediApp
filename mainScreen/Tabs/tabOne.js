import React, { Component } from 'react';
import { View, Text, StyleSheet, ImageBackground, TouchableOpacity, Image, Alert, Button, ScrollView, TextInput } from 'react-native';
import { FlatGrid } from 'react-native-super-grid';
import Modal from 'react-native-modalbox';
import Sound from 'react-native-sound';
import { NavigationAction } from 'react-navigation';
import PropTypes from 'prop-types';
import Slider from 'react-native-slider';
import { Left } from 'native-base';


const audioTests = [
  {
    name: 'Nature',
    image: require('../assets/test.jpg'),
    isRequire: true,
    url: require('../../media/summer_rain.mp3'),
  },
  {
    name: 'Nature',
    image: require('../assets/123.jpeg'),
    isRequire: true,
    url: require('../../media/summer_rain.mp3'),
  },
  {
    name: 'Nature',
    image: require('../assets/rainy.jpg'),
    isRequire: true,
    url: require('../../media/summer_rain.mp3'),
  },
  {
    name: 'Nature',
    image: require('../assets/WellnessAssociation.jpg'),
    isRequire: true,
    url: require('../../media/summer_rain.mp3'),
  },
  {
    name: 'Nature',
    image: require('../assets/flute2.jpg'),
    isRequire: true,
    url: require('../../media/summer_rain.mp3'),
  },
  {
    name: 'Nature',
    image: require('../assets/load.jpg'),
    isRequire: true,
    url: require('../../media/summer_rain.mp3'),
  },
  {
    name: 'Nature',
    image: require('../assets/waterfalls.jpg'),
    isRequire: true,
    url: require('../../media/summer_rain.mp3'),
  },
  {
    name: 'Nature',
    image: require('../assets/forest.jpg'),
    isRequire: true,
    url: require('../../media/summer_rain.mp3'),
  },
  {
    name: 'Nature',
    image: require('../assets/bird.jpg'),
    isRequire: true,
    url: require('../../media/summer_rain.mp3'),
  },
  {
    name: 'Nature',
    image: require('../assets/1.jpg'),
    isRequire: true,
    url: require('../../media/summer_rain.mp3'),
  },
  {
    name: 'Nature',
    image: require('../assets/peaceful-stones-1.jpg'),
    isRequire: true,
    url: require('../../media/summer_rain.mp3'),
  },
  {
    name: 'Nature',
    image: require('../assets/temple.jpg'),
    isRequire: true,
    url: require('../../media/summer_rain.mp3'),
  },
];

const img_speaker = require('../assets/ui_speaker.png');
const img_pause = require('../assets/ui_pause.png');
const img_play = require('../assets/ui_play.png');
const img_playjumpleft = require('../assets/ui_playjumpleft.png');
const img_playjumpright = require('../assets/ui_playjumpright.png');

export default class tabOne extends Component {
  // tab1click= () => {
  //   this.props.navigation.navigate('MainScreen');
  // };
  constructor(props) {
    super(props);

    this.state = {
      isOpen: false,
      isDisabled: false,
      swipeToClose: true,
      playState: 'paused', //playing, paused
      playSeconds: 0,
      duration: 0,
      path: '',
      demo: [],
      name: '',
      image: '',
      url: ''
    }
    this.sliderEditing = false;
  }
  componentDidMount() {
    console.disableYellowBox = true
    // this.play();

    this.timeout = setInterval(() => {
      if (this.sound && this.sound.isLoaded() && this.state.playState == 'playing' && !this.sliderEditing) {
        this.sound.getCurrentTime((seconds, isPlaying) => {
          this.setState({ playSeconds: seconds });
        })
      }
    }, 100);
  }
  componentWillUnmount() {

    if (this.sound) {
      this.sound.release();
      this.sound = null;
      
    }
    if (this.timeout) {
      clearInterval(this.timeout);
    }
  }

  onSliderEditStart = () => {
    this.sliderEditing = true;
  }
  onSliderEditEnd = () => {
    this.sliderEditing = false;
  }
  onSliderEditing = value => {
    if (this.sound) {
      this.sound.setCurrentTime(value);
      this.setState({ playSeconds: value });
    }
  }

    //  play method start
  playSound(testInfo) {
   
    if (this.state.demo.includes(testInfo)) {
      
      this.sound.reset();
      if (this.sound) {
        this.sound.pause();
        // console.log(this.state.demo)

      }
    } else {
      this.state.demo.push(testInfo)
    }

    if (this.sound) {
      // this.sound.stop();
      // console.log(this.state.demo)

    }

    const callback = (error, sound) => {
      if (error) {
        Alert.alert('error', error.message);
        this.setState({
          playState: 'paused'
        });
        return;

      } else {

        this.setState({
          playState: 'playing',
          duration: this.sound.getDuration()
        });

        this.sound.play(this.playComplete);
      }

      testInfo.onPrepared && testInfo.onPrepared(this.sound);
      this.sound.play(() => {

        this.sound.release();
      });

    };

    if (testInfo.isRequire) {

      this.sound = new Sound(testInfo.url, error => callback(error, this.sound));
      console.log('volume: ' + this.sound.getVolume());

    } else {
      this.sound = new Sound(testInfo.url, testInfo.basePath, error => callback(error, this.sound));
    }
    
  }
     // play methos end
  setVolume() {
    this.sound.setVolume(0.5);
  }


  playComplete = (success) => {
    if (this.sound) {
      if (success) {
        console.log('successfully finished playing');
      } else {
        console.log('playback failed due to audio decoding errors');
        Alert.alert('Notice', 'audio file error. (Error code : 2)');
      }
      this.setState({ playState: 'paused', playSeconds: 0 });
      this.sound.setCurrentTime(0);
    }
  }

  pause = () => {
    if (this.sound) {
      this.sound.pause();
    }

    this.setState({ playState: 'paused' });
  }

  jumpPrev15Seconds = () => { this.jumpSeconds(-15); }
  jumpNext15Seconds = () => { this.jumpSeconds(15); }
  jumpSeconds = (secsDelta) => {
    if (this.sound) {
      this.sound.getCurrentTime((secs, isPlaying) => {
        let nextSecs = secs + secsDelta;
        if (nextSecs < 0) nextSecs = 0;
        else if (nextSecs > this.state.duration) nextSecs = this.state.duration;
        this.sound.setCurrentTime(nextSecs);
        this.setState({ playSeconds: nextSecs });
      })
    }
  }

  getAudioTimeString(seconds) {
    const h = parseInt(seconds / (60 * 60));
    const m = parseInt(seconds % (60 * 60) / 60);
    const s = parseInt(seconds % 60);

    return ((h < 10 ? '0' + h : h) + ':' + (m < 10 ? '0' + m : m) + ':' + (s < 10 ? '0' + s : s));
  }

  addingSong(item) {

  }

  onClose() {
    console.log('Modal just closed');
  }

  onOpen() {
    console.log('Modal just opened');
  }

  onClosingState(state) {
    console.log('the open/close of the swipeToClose just changed');
  }
// modal open method
  navigateTomodal1(item) {
    this.setState({
      name: item.name,
      image: item.image,
      url: item.url
    })

    this.refs.modal8.open()
  }
  

  render() {
    const currentTimeString = this.getAudioTimeString(this.state.playSeconds);
    const durationString = this.getAudioTimeString(this.state.duration);
    return (
      <ImageBackground
        source={require("../assets/railway-track-sunrise-max-neivandt.jpg")}
        style={{ width: "100%", height: "100%" }}
      >
        {/* modal starts */}
        <Modal ref={"modal8"} style={[styles.modal, styles.modal2]} position={"top"} entry={"top"}>
          <Text style={{fontSize:24,color:"white",top:5}}>{this.state.name}</Text>
          <Left>
          <Image source={this.state.image} style={{ width: 250, height: 120 ,borderRadius:5,top:20}} />
          </Left>
         
          <View style={{ flexDirection: 'row', justifyContent: 'center', marginVertical: 15 }}>
            <TouchableOpacity onPress={this.jumpPrev15Seconds} style={{ justifyContent: 'center' }}>
              <Image source={img_playjumpleft} style={{ width: 30, height: 30 }} />
              <Text style={{ position: 'absolute', alignSelf: 'center', marginTop: 1, color: 'white', fontSize: 12 }}>15</Text>
            </TouchableOpacity>
            {this.state.playState == 'playing' &&
              <TouchableOpacity onPress={this.pause} style={{ marginHorizontal: 20 }}>
                <Image source={img_pause} style={{ width: 30, height: 30 }} />
              </TouchableOpacity>}
            {this.state.playState == 'paused' &&
              <TouchableOpacity onPress={this.play} style={{ marginHorizontal: 20 }}>
                <Image source={img_play} style={{ width: 30, height: 30 }} />
              </TouchableOpacity>}
            <TouchableOpacity onPress={this.jumpNext15Seconds} style={{ justifyContent: 'center' }}>
              <Image source={img_playjumpright} style={{ width: 30, height: 30 }} />
              <Text style={{ position: 'absolute', alignSelf: 'center', marginTop: 1, color: 'white', fontSize: 12 }}>15</Text>
            </TouchableOpacity>
          </View>
          <View style={{ marginVertical: 15, marginHorizontal: 15, flexDirection: 'row' }}>
            <Text style={{ color: 'white', alignSelf: 'center' }}>{currentTimeString}</Text>
            <Slider
              onTouchStart={this.onSliderEditStart}
              // onTouchMove={() => console.log('onTouchMove')}
              onTouchEnd={this.onSliderEditEnd}
              // onTouchEndCapture={() => console.log('onTouchEndCapture')}
              // onTouchCancel={() => console.log('onTouchCancel')}
              onValueChange={this.onSliderEditing}
              value={this.state.playSeconds} maximumValue={this.state.duration} maximumTrackTintColor='gray' minimumTrackTintColor='white' thumbTintColor='white'
              style={{ flex: 1, alignSelf: 'center', marginHorizontal: Platform.select({ ios: 5 }) }} />
            <Text style={{ color: 'white', alignSelf: 'center' }}>{durationString}</Text>
          </View>

        </Modal>
        {/* Model one end */}
        <FlatGrid
          itemDimension={100}
          items={audioTests}
          style={styles.gridView}
          // staticDimension={300}
          // fixed
          // spacing={20}
          renderItem={({ item, index }) => (
            <View style={[styles.itemContainer, {}]}>

              <TouchableOpacity onPress={() => this.playSound(item)}>
                <ImageBackground source={item.image} style={{ width: 110, height: 120 }} imageStyle={{ borderRadius: 5, resizeMode: "cover" }} >

                  <View style={{ width: 110, height: 25, backgroundColor: 'rgba(235, 109, 13, 0.5)', borderRadius: 5, justifyContent: "center", top: 95, }}>
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
    justifyContent: "center",
    borderRadius: 5,
    height: 120,
    alignContent: "center",
  },
  itemName: {
    fontSize: 14,
    color: "white",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center"
  },
  itemCode: {
    fontWeight: '600',
    fontSize: 12,
    color: '#fff',
  },
  modal: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  modal2: {
    height: 330,
    backgroundColor: "rgba(235, 109, 13, 0.5)",
    borderRadius: 15,
  },
  text: {
    color: "black",
    fontSize: 22,
    
  }
});
