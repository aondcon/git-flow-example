import Aon from '../pages/Aon/Aon.page';
import Joe from '../pages/Joe/Joe.page';
import App from '../App.component';
import Ben from '../pages/Ben/Ben.page';
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
      title: `Aon's Profiles`,
    }),
  },
  Joe: {
    screen: Joe,
    navigationOptions: ({navigation}) => ({
      title: `Joe's Profiles`,
    }),
  },
  Ben: {
    screen: Ben,
    navigationOptions: ({navigation}) => ({
      title: 'Ben\'s Profiles'
    })
  }
});

export default Router;