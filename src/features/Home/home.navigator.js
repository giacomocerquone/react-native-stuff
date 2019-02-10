import React from 'react';
import { createMaterialTopTabNavigator } from 'react-navigation';

import { Ionicons } from '@expo/vector-icons';

import Home from '.';

const tabNavigator = createMaterialTopTabNavigator(
  {
    Dashboard: {
      screen: Home,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => (
          <Ionicons color={tintColor} name="md-home" size={22} />
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

export default tabNavigator;
