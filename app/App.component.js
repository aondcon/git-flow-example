
import firebase from 'react-native-firebase';
import ProptTypes from 'prop-types';
import React, {Component} from 'react';
import styles from './App.style';
import {
  Button,
  Text,
  View
} from 'react-native';

export default class App extends Component {
  _goToAonProfiles = () => {
    // this.props.navigation.navigate('Aon');

    console.log('request firebase notification');
    const FCM = firebase.messaging();
    FCM.requestPermissions();
  }
  _goToBankProfiles = () => {
    this.props.navigation.navigate('Bank');
  }
  _goToTaeProfiles = () => {
    this.props.navigation.navigate('Tae');
  }
  _goToJoeProfiles = () => {
    this.props.navigation.navigate('Joe');
  }
  _goToBenProfiles = () => {
    this.props.navigation.navigate('Ben');
  }
  _goToWatProfiles = () => {
    this.props.navigation.navigate('Wat');
  }
  _goToRungProfiles = () => {
    this.props.navigation.navigate('Rung');
  }

  _goToMProfiles = () => {
    this.props.navigation.navigate('M');
  }
  
  _goToNuProfiles = () => {
    this.props.navigation.navigate('Nu');
  }

  _goToChongProfiles = () => {
    this.props.navigation.navigate('Chong');
  }
  render () {
    return (
      <View style={styles.container}>
        <Button onPress={this._goToAonProfiles} title="Go to Aon's Profile" />
        <Button onPress={this._goToBankProfiles} title="Go to Bank's Profile" />
        <Button onPress={this._goToTaeProfiles} title="Go to Tae's Profile" />
        <Button onPress={this._goToJoeProfiles} title="Go to Joe's Profile" />
        <Text>Made by Hybrid TEAM!!! test eiei</Text>
      </View>
    );
  }
}

App.propTypes = {
  navigation: ProptTypes.object
};

App.defaultProps = {
  navigation: {}
};

