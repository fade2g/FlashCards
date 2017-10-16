import React, {Component} from 'react';
import {Text, View} from 'react-native'
import {CoreStyles} from "../../helper/CoreStyles";
import {Ionicons} from "@expo/vector-icons";

class AddDeck extends Component {

  // noinspection JSUnusedGlobalSymbols
  static navigationOptions = {
    tabBarLabel: 'Add Deck',
    tabBarIcon: ({tintColor}) => (<Ionicons name='ios-speedometer' size={30} color={tintColor}/>)
  };

  render() {
    return (<View style={CoreStyles.flex}>
      <Text>
        AddDeck
      </Text>
    </View>)
  }
}

export default AddDeck;
