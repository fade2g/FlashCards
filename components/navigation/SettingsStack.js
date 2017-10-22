import React from 'react';
import {StackNavigator} from "react-navigation";
import HamburgerMenu from "../HamburgerMenu";
import Settings from "../views/Settings";

const SettingsStack = StackNavigator({
  Settings: {
    screen: Settings,
    navigationOptions: ({navigation}) => ({
      title: 'Settings',
      headerRight: <HamburgerMenu navigation={navigation}/>
    })
  }
}, { });

export default SettingsStack;
