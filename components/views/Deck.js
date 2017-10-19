import React, {Component} from 'react';
import {Text, View} from 'react-native'
import {connect} from "react-redux";

class Deck extends Component {
  render() {
    const deckName = this.props.navigation.state.params.deckName;
    const deck = this.props.deck[deckName];
    return (<View>
      <Text>
        Single Deck is '{deckName}'
        And has cards '{JSON.stringify(deck)}'
      </Text>
    </View>)
  }
}

function mapStateToProps({deck}) {
  return {
    deck
  }
}

export default connect(mapStateToProps)(Deck);
