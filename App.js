import React from 'react';
//import all the basic component
import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';
//import Ionicons for icon bottom
import Ionicons from 'react-native-vector-icons/Ionicons';
//import React Navigation
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createStackNavigator } from 'react-navigation-stack';

import ExploreScreen from './pages/ExploreScreen';
import SellScreen from './pages/SellScreen';
import ProfileScreen from './pages/ProfileScreen';
import DetailScreen from './pages/DetailScreen';

const ExploreStack = createStackNavigator(
  {
    //Definitiation of Navigation from explore screen
    Explore: { screen: ExploreScreen },
    Details: { screen: DetailScreen },
  },
  {
    defaultNavigationOptions: {
      //Header customization of the perticular Screen
      headerStyle: {
        backgroundColor: '#1FB25F',
      },
      //Header title
      headerTintColor: '#FFFFFF',
      title: 'Explore',
    },
  }
);
const SellStack = createStackNavigator(
  {
    //Definitiation of Navigation from sell screen
    Sell: { screen: SellScreen },
    Details: { screen: DetailScreen },
  },
  {
    defaultNavigationOptions: {
      //Header customization of the perticular Screen
      headerStyle: {
        backgroundColor: '#1FB25F',
      },
      //Header title
      headerTintColor: '#FFFFFF',
      title: 'Sell',
    },
  }
);
const ProfileStack = createStackNavigator(
  {
    //Definitiation of Navigation from profile screen
    Profile: { screen: ProfileScreen },
    Details: { screen: DetailScreen },
  },
  {
    defaultNavigationOptions: {
      //Header customization of the perticular Screen
      headerStyle: {
        backgroundColor: '#1FB25F',
      },
      //Header title
      headerTintColor: '#FFFFFF',
      title: 'Profile',
    },
  }
);

const App = createBottomTabNavigator(
  {
    Explore: { screen: ExploreStack },
    Sell: { screen: SellStack },
    Profile: { screen: ProfileStack },
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, horizontal, tintColor }) => {
        const { routeName } = navigation.state;
        let IconComponent = Ionicons;
        let iconName;
        if (routeName === 'Explore') {
          iconName = `ios-nutrition${focused ? '' : ''}`;
        } else if (routeName === 'Sell') {
          iconName = `ios-pricetags${focused ? '' : ''}`;
        } else if (routeName === 'Profile') {
          iconName = `ios-person${focused ? '' : ''}`;
        }
        return <IconComponent name={iconName} size={25} color={tintColor} />;
      },
    }),
    tabBarOptions: {
      activeTintColor: '#1FB25F',
      inactiveTintColor: 'gray',
    },
  }
);

export default createAppContainer(App);

