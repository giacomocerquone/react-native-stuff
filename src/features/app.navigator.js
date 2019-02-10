import { createSwitchNavigator, createStackNavigator } from 'react-navigation';

import DataAndPollingHandler from './Dashboard/navigatorContainer';
import SignIn from './Login/components/loginContainer';
import AuthCheck from './Login/AuthCheck/components/authCheckScreen';

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

const Dashboard = createStackNavigator({ DataAndPollingHandler });

export default createSwitchNavigator({ AuthCheck, Dashboard, Login });
