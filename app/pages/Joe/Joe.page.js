import ProptTypes from 'prop-types';
import React, {Component} from 'react';
import styles from './Joe.style';
import {
  Button,
  Image,
  Text,
  View
} from 'react-native';

export default class App extends Component {
  _onPressGoback = () => { 
    const {goBack} = this.props.navigation;
    goBack();
  }
  render () {
    return (
      <View style={styles.contain}>
        <Image style={styles.img} source={require('./myAvatar.png')} />
        <Text style={styles.welcome}>Name:Joe</Text>
        <Text style={styles.welcome}>Email:Suphawutk@gmail.com</Text>
        <Text style={styles.welcome}>Tel:0909620816</Text>
        <Button onPress={this._onPressGoback}
          title='Go Back' />
      </View>
    );
  }
}

App.propTypes = {
  navigation: ProptTypes.object
};

App.defaultProps = {
  navigation: {}
};
