import React, {Component} from 'react';
import {
  Button,
  StyleSheet,
  View
} from 'react-native';

export default class App extends Component {
  _goToAonProfiles = () => {
    this.props.navigation.navigate('Aon');
  }

  _goToNuProfiles = () => {
    this.props.navigation.navigate('Nu');
  }

  render () {
    return (
      <View style={styles.container}>
        <Button onPress={this._goToAonProfiles} title="Go to Aon's Profile" />
        <Button onPress={this._goToNuProfiles} title="Go to Nu Profile" />
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
 