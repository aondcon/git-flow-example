import React, {Component} from 'react';
import styles from './Rung.style';
import {
  Image,
  Text,
  TouchableOpacity,
  View
} from 'react-native';

export default class App extends Component {
  goBack = () => {
    this.props.navigation.goBack();
  };
  render () {
    return (
      <View style={styles.container}>
        <View style={styles.img}>
          <Image
            style={styles.stretch}
            source={require('./Img/Rung.jpg')}
          />
        </View>
        <Text style={styles.welcome}>Name: Suttichai Chimnongwaeng</Text>
        <Text style={styles.welcome}>Email: suttichai123456@gmail.com</Text>
        <Text style={styles.welcome}>Phone: 0877943813</Text>
        <View style={styles.img}>
          <TouchableOpacity
            style={styles.button}
            onPress={this.onPress}
          >
            <Text style={styles.buttonText} onPress={this.goBack}> Back </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}