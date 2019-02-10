
import React from 'react';
import {
  createMaterialTopTabNavigator,
  createAppContainer,
} from 'react-navigation';

import { Ionicons, Entypo } from '@expo/vector-icons';

import History from './History/HistoryContainer';
import Dashboard from './Dashboard/dash.navigator';

const tabNavigator = createMaterialTopTabNavigator(
  {
    Dashboard: {
      screen: Dashboard,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => (
          <Ionicons color={tintColor} name="md-list" size={22} />
        ),
      },
    },
    History: {
      screen: History,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => (
          <Entypo color={tintColor} name="line-graph" size={22} />
        ),
      },
    },
  },
  {
    tabBarPosition: 'bottom',
    tabBarOptions: {
      activeTintColor: '#C5C5C5',
      inactiveTintColor: '#C5C5C5',
      showLabel: false,
      showIcon: true,
      renderIndicator: () => null,
      style: {
        backgroundColor: '#FAFAFA',
      },
    },
  },
);

export default createAppContainer(tabNavigator);
