import React from 'react';
import {StackNavigator} from "react-navigation";
import Deck from "../views/Deck";
import Quiz from "../views/Quiz";
import DeckList from "../views/DeckList";

const DeckNavigation = StackNavigator({
  Decks: {
    screen: DeckList,
    navigationOptions: ({navigation}) => ({
      title: 'Decks'
    })
  },
  Deck: {
    screen: Deck,
    navigationOptions: ({navigation}) => ({
      title: `Deck \'${navigation.state.params.deckName}\'`
    })
  },
  Quiz: {
    screen: Quiz,
    navigationOptions: ({navigation}) => ({
      title: `Quiz of deck \'${navigation.state.params.deckName}\'`
    })
  }
});


export default DeckNavigation;
