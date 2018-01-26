import React, {Component} from 'react';
import styles from './Chong.style';
import {Image, Text, View} from 'react-native';

export default class Chong extends Component {
  render () {
    return (
      <View style={styles.container}>
        <Image
          style={styles.avatar}
          source={{uri: 'https://scontent.fbkk1-5.fna.fbcdn.net/v/t1.0-9/424327_513741845318348_182241839_n.jpg?_nc_fx=fbkk1-2&oh=b44873b9ae63cf4654f931ee130cbf0e&oe=5AE31C9B'}}/>
        <Text style={styles.welcome}>Hello my name is chong.</Text>
        <Text style={styles.fullname}>Thanaphat Suwannikornkul</Text>
      </View>
    );
  }
}

