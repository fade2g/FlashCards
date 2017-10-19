import React, {Component} from 'react';
import {View, ScrollView, Text} from 'react-native'
import {NavigationActions} from 'react-navigation';
import {CoreStyles} from "../../helper/CoreStyles";
import {Ionicons} from "@expo/vector-icons";
import {connect} from "react-redux";
import {fetchDecks} from "../../helper/api";
import {receiveDecks} from "../../actions/index";
import DeckCard from "../DeckCard";

class DeckList extends Component {

  // noinspection JSUnusedGlobalSymbols
  static navigationOptions = {
    tabBarLabel: 'Decks',
    tabBarIcon: ({tintColor}) => (<Ionicons name='ios-speedometer' size={30} color={tintColor}/>)
  };

  state = {
    ready: false
  };

  componentDidMount() {
    const {dispatch} = this.props;

    fetchDecks()
      .then((decks) => {
        dispatch(receiveDecks(decks));
      })
      .then(() => {
        this.setState(() => ({ready: true}))
      })
  }

  toDeck = (deckName) => {
    this.props.navigation.dispatch(NavigationActions.navigate({
      routeName: 'Deck',
      params: {deckName}
    }))
  };

  render() {
    const {decks} = this.props;
    return (<View style={CoreStyles.flex}>
      {this.state.ready
        ? <ScrollView>
          {decks && Object.keys(decks).map((deckKey) => {
            return (<DeckCard
              key={deckKey}
              deckName={deckKey}
              numberOfCards={decks[deckKey].length}
              onPress={() => {
                this.toDeck(deckKey)
              }}>
            </DeckCard>)
          })}
        </ScrollView>
        : <Text>Loading</Text>}
    </View>)
  }
}

function mapStateToProps({deck}) {
  return {
    decks: deck
  }
}

export default connect(mapStateToProps)(DeckList);
