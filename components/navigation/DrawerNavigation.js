import React from 'react';
import {DrawerItems, DrawerNavigator} from "react-navigation";
import Settings from "../views/Settings";
import {View} from "react-native";
import DeckNavigation from "./DeckNavigation";
import AddDeck from "../views/AddDeck";
import {MaterialIcons} from "@expo/vector-icons/index";
import Octicons from "@expo/vector-icons/Octicons";
import Entypo from "@expo/vector-icons/Entypo";

const CustomDrawerContentComponent = (props) => {
  const subItems = props.items.filter((item) => !props.excludedRoutes.contains(item.key));
  const newProps = {
    ...props,
    items: subItems
  };
  return (
    <View>
      <DrawerItems {...newProps} />
    </View>
  )
};

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
    screen: AddDeck,
    navigationOptions: {
      drawerLabel: 'Add Deck',
      drawerIcon: ({tintColor}) => (<Entypo name='add-to-list' size={30} color={tintColor}/>)
    }
  },
  Settings: {
    screen: Settings,
    navigationOptions: {
      drawerLabel: 'Settings',
      drawerIcon: ({tintColor}) => (<Octicons name='settings' size={30} color={tintColor}/>)
    }
  }
}, {
  initialRouteName: 'Home',
  drawerPosition: 'left',
  // contentComponent: CustomDrawerContentComponent,
  contentOptions: {
    excludedRoutes: 'DeckNavigation',
  },
});

export default DrawerNavigation;
