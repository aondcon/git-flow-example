import { StackNavigator } from 'react-navigation';
import App from '../App.component';
import Aon from '../pages/Aon/Aon.page';
  
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
  }
});

export default Router;