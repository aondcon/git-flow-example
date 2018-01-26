import Aon from '../pages/Aon/Aon.page';
import App from '../App.component';
import Bank from '../pages/Bank/Bank.page';
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
  Bank: {
    screen: Bank,
    navigationOptions: ({navigation}) => ({
      title: 'Bank\'s Profiles'
    })
  }
});

export default Router;