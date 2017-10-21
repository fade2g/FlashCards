import React from 'react';
import {Platform} from 'react-native'
import {TabNavigator} from 'react-navigation'
import {primary_dark, primary_light, secondary_dark, secondary_light} from "../../helper/colors";
import DeckNavigation from "./DeckNavigation";
import AddDeck from "../views/AddDeck";

const Tabs = TabNavigator({
  DeckNavigation: {
    screen: DeckNavigation
  },
  AddDeck: {
    screen: AddDeck
  }
}, {
  navigationOptions: {
    header: null
  },
  tabBarPosition: 'bottom',
  animationEnabled: true,
  tabBarOptions: {
    activeTintColor: Platform.OS === 'ios' ? primary_light : secondary_light,
    style: {
      height: 56,
      backgroundColor: Platform.OS === 'ios' ? secondary_dark : primary_dark,
      shadowColor: 'rgba(0, 0, 0, 0.24)',
      shadowOffset: {
        width: 0,
        height: 3
      },
      shadowRadius: 6,
      shadowOpacity: 1
    }
  }
});


export default Tabs;
