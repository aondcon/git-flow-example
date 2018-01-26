import React, {Component} from 'react';
import styles from './Tae.style';
import {
  Image,
  Text,
  View
} from 'react-native';

export default class App extends Component {
  render () {
    return (
      <View style={styles.container}>
        <Image style={styles.pic} source={require('../Tae/tae.jpg')}/>
        <Text style={styles.welcome}>Name: Pheerah Praditthaphong</Text>
        <Text style={styles.welcome}>Email: pheerah_pra@truecorp.co.th</Text>
        <Text style={styles.welcome}>Tel: 0953515696</Text>
      </View>
    );
  }
}

