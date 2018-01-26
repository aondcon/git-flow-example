import Aon from '../pages/Aon/Aon.page';
import App from '../App.component';
import Rung from '../pages/Rung/Rung.page';
import { StackNavigator } from 'react-navigation';
  
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
  Rung: {
    screen: Rung,
    navigationOptions: ({navigation}) => ({
      title: 'Rung\'s Profiles'
    })
  }
});

export default Router;