import React, {Component} from 'react';
import {Text, View} from 'react-native'
import {NavigationActions} from 'react-navigation';
import {connect} from "react-redux";
import {CoreStyles} from "../../helper/CoreStyles";
import TouchableButton from "../TouchableButton";
import {deleteDeck} from "../../actions/index";
import {deleteDeckFromStorage} from "../../helper/api";

class Deck extends Component {

  subNavigate = (deckName, routeName) => {
    this.props.navigation.dispatch(NavigationActions.navigate({
      routeName: routeName,
      params: {deckName}
    }))
  };

  deleteDeck = (deckName) => {
    this.props.deleteDeck(deckName);
    this.props.navigation.goBack();
    deleteDeckFromStorage(deckName);
  };

  render() {
    const deckName = this.props.navigation.state.params.deckName;
    const deck = this.props.decks[deckName];
    if (!deck) {
      return null;
    }
    return (<View>
      <Text style={CoreStyles.text}>{deckName}</Text>
      <Text style={CoreStyles.textMinor}>{deck.length} cards</Text>
      <TouchableButton onPress={() => this.deleteDeck(deckName)} style={CoreStyles.deleteButton}>Delete Deck</TouchableButton>
      <TouchableButton
        onPress={() => this.subNavigate(deckName, 'AddQuestion')}
        style={CoreStyles.primaryButton}>
        Add Question
      </TouchableButton>
      <TouchableButton onPress={() => this.subNavigate(deckName, 'Quiz')} style={CoreStyles.primaryButton}>Start Quiz</TouchableButton>
    </View>)
  }
}


function mapStateToProps({decks}) {
  return {
    decks
  }
}

function mapDispatchToProps(dispatch) {
  return {
    deleteDeck: (deckName) => {
      dispatch(deleteDeck(deckName))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Deck);
