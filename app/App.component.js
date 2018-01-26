import PropTypes from 'prop-types';
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
  _goToBenProfiles = () => {
    this.props.navigation.navigate('Ben');
  }
  _goToChongProfiles = () => {
    this.props.navigation.navigate('Chong');
  }
  render () {
    return (
      <View style={styles.container}>
        <Button onPress={this._goToAonProfiles} title="Go to Aon's Profile" />
        <Button onPress={this._goToBenProfiles} title="Go to Ben's Profile" />
        <Button onPress={this._goToChongProfiles} title="Go to Chong's Profile" />
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
 
App.propTypes = {
  navigation: PropTypes.object
};
