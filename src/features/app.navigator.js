import {
  createSwitchNavigator,
  createStackNavigator,
  createAppContainer,
} from 'react-navigation';

import Home from './Home/home.navigator';
import SignIn from './Login';
import AuthCheck from './AuthCheck';

const Login = createStackNavigator(
  { SignIn },
  {
    navigationOptions: {
      title: 'Login',
      headerStyle: { backgroundColor: '#000' },
      headerTitleStyle: { color: '#fff' },
    },
  },
);

const switchNavigator = createSwitchNavigator({ AuthCheck, Home, Login });

export default createAppContainer(switchNavigator);
