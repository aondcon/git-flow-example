import React, {Component} from 'react';
import styles from './Joe.style';
import {
  Image,
  Text,
  View
} from 'react-native';

export default class App extends Component {
  render () {
    return (
      <View style={styles.container}>
        <Image style={styles.img} source={require('./myAvatar.png')} />
        <Text style={styles.welcome}>Name:Joe</Text>
        <Text style={styles.welcome}>Email:Suphawutk@gmail.com</Text>
        <Text style={styles.welcome}>Tel:0909620816</Text>
      </View>
    );
  }
}
