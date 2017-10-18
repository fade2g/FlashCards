import React, {Component} from 'react';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import {View} from 'react-native';
import FlashStatusBar from "./components/FlashStatusBar";
import {primary_light} from "./helper/colors";
import rootReducer from './reducers/rootReducer'
import MainNavigator from "./components/navigation/MainNavigator";
import {CoreStyles} from "./helper/CoreStyles";


export default class App extends Component {

  render() {
    return (
      <Provider store={createStore(rootReducer)}>
        <View style={CoreStyles.flex}>
          <FlashStatusBar backgroundColor={primary_light}/>
          <MainNavigator/>
        </View>
      </Provider>
    );
  }
}
