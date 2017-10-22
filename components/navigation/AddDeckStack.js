import React from 'react';
import {StackNavigator} from "react-navigation";
import AddDeck from "../views/AddDeck";
import HamburgerMenu from "../HamburgerMenu";

const AddCardStack = StackNavigator({
  AddDeck: {
    screen: AddDeck,
    navigationOptions: ({navigation}) => ({
      title: 'Add Deck',
      headerRight: <HamburgerMenu navigation={navigation}/>
    })
  }
}, { });

export default AddCardStack;
