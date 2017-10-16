import React, {Component} from 'react';
import {Text, View} from 'react-native'
import {CoreStyles} from "../../helper/CoreStyles";
import {Ionicons} from "@expo/vector-icons";

class DeckList extends Component {

  // noinspection JSUnusedGlobalSymbols
  static navigationOptions = {
    tabBarLabel: 'Decks',
    tabBarIcon: ({tintColor}) => (<Ionicons name='ios-speedometer' size={30} color={tintColor}/>)
  };


  render() {
    return (<View style={CoreStyles.flex}>
      <Text>
        DeckList
      </Text>
    </View>)
  }
}

export default DeckList;
