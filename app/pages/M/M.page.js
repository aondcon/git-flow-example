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
        <Text style={styles.welcome}>Hello I'm Aon!</Text>
        <Text style={styles.welcome}>Jakkrit Chinvoraratanakanok</Text>
      </View>
    );
  }
}
