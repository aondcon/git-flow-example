import PropTypes from 'prop-types';
import React, {Component} from 'react';
import styles from './Nu.style';
import {
  Button,
  Image,
  Text, View
} from 'react-native';

export default class App extends Component {

  render () {
    const {goBack} = this.props.navigation;
    function _backPage () { 
      return goBack();
    }
    return (
      <View style={styles.container}>
        <Image source={require('../../../img/batmanicon.png')} />
        <Text style={styles.welcome}>Name: Panurut Ounwong</Text>
        <Text style={styles.welcome}>Birth Day: 21 August 1991</Text>
        <Text style={styles.welcome}>Email: nubrabra5@gmail.com</Text>
        <Text style={styles.welcome}>Phone: 092-897-8282</Text>
        <Button onPress={_backPage} title='Back' />
      </View>
    );
  }
}

App.propTypes = {
  navigation: PropTypes.object.isRequired,
  goBack: PropTypes.func.isRequired
};

App.defaultProps = {
  navigation: PropTypes.object,
  goBack: PropTypes.func
};

