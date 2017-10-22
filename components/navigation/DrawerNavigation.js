import React from 'react';
import {DrawerItems, DrawerNavigator} from "react-navigation";
import Settings from "../views/Settings";
import DeckNavigation from "./DeckNavigation";
import {MaterialIcons} from "@expo/vector-icons/index";
import Octicons from "@expo/vector-icons/Octicons";
import Entypo from "@expo/vector-icons/Entypo";
import AddCardStack from "./AddCardStack";
import SettingsStack from "./SettingsStack";

// noinspection JSUnusedGlobalSymbols
const DrawerNavigation = DrawerNavigator({
  Home: {
    screen: DeckNavigation,
    navigationOptions: {
      drawerLabel: 'Home',
      drawerIcon: ({tintColor}) => (<MaterialIcons name='home' size={30} color={tintColor}/>)
    }
  },
  AddDeck: {
    screen: AddCardStack,
    navigationOptions: {
      drawerLabel: 'Add Deck',
      drawerIcon: ({tintColor}) => (<Entypo name='add-to-list' size={30} color={tintColor}/>)
    }
  },
  Settings: {
    screen: SettingsStack,
    navigationOptions: {
      drawerLabel: 'Settings',
      drawerIcon: ({tintColor}) => (<Octicons name='settings' size={30} color={tintColor}/>)
    }
  }
}, {
  initialRouteName: 'Home',
  drawerPosition: 'right',
  drawerWidth: 250,
  contentOptions: {
    excludedRoutes: 'DeckNavigation',
  },
});

export default DrawerNavigation;
