import React, {Component} from 'react';
import {Text, View} from 'react-native'
import {CoreStyles} from "../../helper/CoreStyles";
import {Ionicons} from "@expo/vector-icons";
import {connect} from "react-redux";
import {fetchDecks} from "../../helper/api";
import {receiveDecks} from "../../actions/index";

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


  render() {
    const {decks} = this.props;
    return (<View style={CoreStyles.flex}>
      {decks !== undefined && Object.keys(decks).map((deckKey) => {
        return (<Text key={deckKey}>
          {deckKey}
        </Text>)
      })}

    </View>)
  }
}

function mapStateToProps({deck}) {
  return {
    decks: deck
  }
}

export default connect(mapStateToProps)(DeckList);
