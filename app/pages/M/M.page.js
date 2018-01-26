import React, {Component} from 'react';
import styles from './M.style';
import {
  Text,
  View
} from 'react-native';

export default class App extends Component {
  render () {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Hello I'm M!</Text>
        <Text style={styles.welcome}>Teeraphong Chaichalermpreecha</Text>
        <Text style={styles.welcome}>0800119696</Text>
        <Text style={styles.welcome}>Teeraphong_Cha@truecorp.co.th</Text>
      </View>
    );
  }
}
