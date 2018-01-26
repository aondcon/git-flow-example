import { StackNavigator } from 'react-navigation';
import App from '../App.component';
import Aon from '../pages/Aon/Aon.page';
import Joe from '../pages/Joe/Joe.page';
  
const Router = StackNavigator({
  Main: {
    screen: App,
    navigationOptions: ({navigation}) => ({
      title: `Main Page`,
    }),
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
  }
});

export default Router;