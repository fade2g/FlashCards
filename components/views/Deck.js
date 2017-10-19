import React, {Component} from 'react';
import {Text, View} from 'react-native'
import {NavigationActions} from 'react-navigation';
import {connect} from "react-redux";
import {CoreStyles} from "../../helper/CoreStyles";
import TouchableButton from "../TouchableButton";

class Deck extends Component {

  subNavigate = (deckName, routeName) => {
    this.props.navigation.dispatch(NavigationActions.navigate({
      routeName: routeName,
      params: {deckName}
    }))
  };

  render() {
    const deckName = this.props.navigation.state.params.deckName;
    const deck = this.props.deck[deckName];
    return (<View>
      <Text style={CoreStyles.text}>{deckName}</Text>
      <Text style={CoreStyles.textMinor}>{deck.length} cards</Text>
      <TouchableButton onPress={() => { }} style={CoreStyles.deleteButton}>Delete Deck</TouchableButton>
      <TouchableButton
        onPress={() => this.subNavigate(deckName, 'AddQuestion')}
        style={CoreStyles.primaryButton}>
        Add Question
      </TouchableButton>
      <TouchableButton onPress={() => this.subNavigate(deckName, 'Quiz')} style={CoreStyles.primaryButton}>Start Quiz</TouchableButton>
    </View>)
  }
}


function mapStateToProps({deck}) {
  return {
    deck
  }
}

export default connect(mapStateToProps)(Deck);
