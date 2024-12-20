import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { colors, gStyle } from '../constants';

// grabs stacks
import StackHome from './StackHome';
import StackSearch from './StackSearch';
import StackDownloads from './StackDownloads';
import StackMore from './StackMore';

// icons
import SvgDownloads from '../assets/icons/Svg.Downloads';
import SvgHome from '../assets/icons/Svg.Home';
import SvgMenu from '../assets/icons/Svg.Menu';
import SvgSearch from '../assets/icons/Svg.Search';

const Tab = createBottomTabNavigator();

function TabNavigation() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarActiveTintColor: colors.white,
        tabBarInactiveTintColor: colors.inactiveGrey,
        tabBarIcon: ({ color }) => {
          let icon = <SvgHome fill={color} />;

          if (route.name === 'StackSearch') {
            icon = <SvgSearch fill={color} />;
          } else if (route.name === 'StackDownloads') {
            icon = <SvgDownloads fill={color} />;
          } else if (route.name === 'StackMore') {
            icon = <SvgMenu fill={color} />;
          }

          return icon;
        },
        tabBarStyle: gStyle.navTabStyle
      })}
    >
      <Tab.Screen
        name="StackHome"
        component={StackHome}
        options={{
          tabBarLabel: 'Início'
        }}
      />
      <Tab.Screen
        name="StackSearch"
        component={StackSearch}
        options={{
          tabBarLabel: 'Pesquisar'
        }}
      />
      <Tab.Screen
        name="StackDownloads"
        component={StackDownloads}
        options={{
          tabBarLabel: 'Downloads'
        }}
      />
      <Tab.Screen
        name="StackMore"
        component={StackMore}
        options={{
          tabBarLabel: 'Mais'
        }}
      />
    </Tab.Navigator>
  );
}

export default TabNavigation;
