import {
  StyleSheet
} from 'react-native';

const stylesObj = {
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF'
  },
  avatar: {
    width: 100,
    height: 100
  },
  welcome: {
    fontSize: 16,
    textAlign: 'center',
    padding: 10,
    color: 'blue'
  },
  fullname: {
    fontSize: 20,
    textAlign: 'center',
    padding: 10,
    color: 'black'
  }
};

const styles = StyleSheet.create(stylesObj);

export default styles;
