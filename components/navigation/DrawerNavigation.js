import React from 'react';
import {DrawerItems, DrawerNavigator} from "react-navigation";
import Settings from "../views/Settings";
import Tabs from "./Tabs";
import {View} from "react-native";

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
  Settings: {
    screen: Settings,
  },
  HomeTabs: {
    screen: Tabs
  }
}, {
  initialRouteName: 'HomeTabs',
  drawerPosition: 'left',
  contentComponent: CustomDrawerContentComponent,
  contentOptions: {
    excludedRoutes: 'HomeTabs',
  },
});

export default DrawerNavigation;
