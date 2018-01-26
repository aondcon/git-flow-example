import React, {Component} from 'react';
import styles from './Ben.style';
import {Image, Text, View} from 'react-native';

export default class Ben extends Component {
  render () {
    return (
      <View style={styles.container}>
        <Image style={styles.img} source={require('./BenAvatar.png')} />
        <Text style={styles.welcome}>Hello My Name Is Ben!</Text>
        <Text style={styles.name}>Name : Benjapol Suksakulchai</Text>
        <Text style={styles.tel}>Tel : 0918168000</Text>
        <Text style={styles.email}>Email : Benjapol_Suk@truecorp.co.th</Text>
      </View>
    );
  }
}

