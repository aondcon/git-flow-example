import React, {Component} from 'react';
import style from './Wat.page.style';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';

export default class Wiwat extends Component {
  render () {
    return (
      <View style={style.container}>
        <Text style={style.welcome}>Hello I'm Ultramen! and Supermen! is not Wonderwoman</Text>
        <Text style={style.welcome}>Wiwat Patanaprasitchai</Text>
        <Text style={style.welcome}>Line id :: choginwat</Text>
      </View>
    );
  }
}