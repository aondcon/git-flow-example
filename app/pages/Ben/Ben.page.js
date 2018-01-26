import React, {Component} from 'react';
import styles from './Ben.style';
import {Text, View} from 'react-native';

export default class Ben extends Component {
  render () {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Hello My Name Is Ben!</Text>
        <Text style={styles.welcome}>Benjapol Suksakulchai</Text>
      </View>
    );
  }
}

