import React, {Component} from 'react';
import {Provider} from 'react-redux';
import {View} from 'react-native';
import FlashStatusBar from "./components/FlashStatusBar";
import {primary_light} from "./helper/colors";
import {CoreStyles} from "./helper/CoreStyles";
import DrawerNavigation from "./components/navigation/DrawerNavigation";
import store from "./store/index";

export default class App extends Component {

  render() {
    return (
      <Provider store={store}>
        <View style={CoreStyles.flex}>
          <FlashStatusBar backgroundColor={primary_light}/>
          <DrawerNavigation/>
        </View>
      </Provider>
    );
  }
}
