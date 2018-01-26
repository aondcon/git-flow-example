import React, {Component} from 'react';
import {
  Image,
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';

export default class Bank extends Component {
  render () {
    return (
      <View style={styles.container}>
        <Image
          source={require('../../../avatar.png')}
        />
        <Text style={styles.welcome}>Hello I'm Bank!</Text>
        <Text style={styles.welcome}>Chaowalit Kongkham</Text>
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
  }
});
