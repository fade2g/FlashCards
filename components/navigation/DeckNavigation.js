import React from 'react';
import {StackNavigator} from "react-navigation";
import Deck from "../views/Deck";
import Quiz from "../views/Quiz";
import DeckList from "../views/DeckList";
import HamburgerMenu from "../HamburgerMenu";
import AddCard from "../views/AddCard";
import Settings from "../views/Settings";

// noinspection JSUnusedGlobalSymbols
const DeckNavigation = StackNavigator({
  Decks: {
    screen: DeckList,
    navigationOptions: ({navigation}) => ({
      title: 'Decks',
      headerRight: <HamburgerMenu navigation={navigation}/>
    })
  },
  Deck: {
    screen: Deck,
    navigationOptions: ({navigation}) => ({
      title: `Deck \'${navigation.state.params.deckName}\'`,
      headerRight: <HamburgerMenu navigation={navigation}/>
    })
  },
  AddCard: {
    screen: AddCard,
    navigationOptions: ({navigation}) => ({
      title: `Add Card for \'${navigation.state.params.deckName}\'`,
      headerRight: <HamburgerMenu navigation={navigation}/>
    })
  },
  Quiz: {
    screen: Quiz,
    navigationOptions: ({navigation}) => ({
      title: `Quiz \'${navigation.state.params.deckName}\'`,
      headerRight: <HamburgerMenu navigation={navigation}/>
    })
  },
  QuickSettings: {
    screen: Settings,
    navigationOptions: ({navigation}) => ({
      title: 'Settings',
      headerRight: <HamburgerMenu navigation={navigation}/>
    })
  }
});


export default DeckNavigation;
