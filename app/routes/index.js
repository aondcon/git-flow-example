import Aon from '../pages/Aon/Aon.page';
import App from '../App.component';
import Tae from '../pages/Tae/Tae.page';
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
  Tae: {
    screen: Tae,
    navigationOptions: ({navigation}) => ({
      title: 'Tae\'s Profiles'
    })
  }
});

export default Router;