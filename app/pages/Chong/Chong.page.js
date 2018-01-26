import React, {Component} from 'react';
import styles from './Chong.style';
import {Text, View} from 'react-native';

export default class Chong extends Component {
  render () {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Hello My Name Is Chong!</Text>
        <Text style={styles.welcome}>Thanaphat Suwannikornkul</Text>
      </View>
    );
  }
}

