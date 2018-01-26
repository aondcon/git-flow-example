import Aon from '../pages/Aon/Aon.page';
import App from '../App.component';
import Ben from '../pages/Ben/Ben.page';
import Chong from '../pages/Chong/Chong.page';
import {StackNavigator} from 'react-navigation';

const Router = StackNavigator({
  Main: {
    screen: App,
    navigationOptions: ({navigation}) => ({
      title: 'Main Page'
    })
  },
  Aon: {
    screen: Aon,
    navigationOptions: ({navigation}) => ({
      title: 'Aon\'s Profiles'
    })
  },
  Ben: {
    screen: Ben,
    navigationOptions: ({navigation}) => ({
      title: 'Ben\'s Profiles'
    })
  },
  Chong: {
    screen: Chong,
    navigationOptions: {
      title: 'Chong\'s Profiles'
    }
  }
});

export default Router;