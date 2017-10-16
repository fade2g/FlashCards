import React, {Component} from 'react';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import {View} from 'react-native';
import FlashStatusBar from "./components/FlashStatusBar";
import {primary_light} from "./helper/colors";
import reducer from './reducers'
import MainNavigator from "./components/navigation/MainNavigator";
import {CoreStyles} from "./helper/CoreStyles";


export default class App extends Component {

  render() {
    console.log('hello debugger');
    return (
      <Provider store={createStore(reducer)}>
        <View style={CoreStyles.flex}>
          <FlashStatusBar backgroundColor={primary_light}/>
          <MainNavigator/>
        </View>
      </Provider>
    );
  }
}
