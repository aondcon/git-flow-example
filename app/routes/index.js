import Aon from '../pages/Aon/Aon.page';
import App from '../App.component';
import Wiwat from '../pages/Wat/Wat.page';
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
  Wat: {
    screen: Wiwat,
    navigationOptions: ({navigation}) => ({
      title: 'Wiwat\'s Profiles'
    })
  }
});

export default Router;