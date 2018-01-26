import React, {Component} from 'react';
import {
  Image,
  StyleSheet,
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF'
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5
  },
  pic: {
    maxHeight: 100
  }
});
