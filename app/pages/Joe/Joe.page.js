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
        <Image style={styles.img} source={require('./myAvatar.png')} />
        <Text style={styles.welcome}>Name:Joe</Text>
        <Text style={styles.welcome}>Email:Suphawutk@gmail.com</Text>
        <Text style={styles.welcome}>Tel:0909620816</Text>
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
  img: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '90%',
    height: '70%'
  }
});
