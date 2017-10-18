import React, {Component} from 'react';
import {KeyboardAvoidingView, Text, TextInput, TouchableOpacity, View} from 'react-native'
import {CoreStyles} from "../../helper/CoreStyles";
import {Ionicons} from "@expo/vector-icons";
import TouchableButton from "../TouchableButton";
import {connect} from "react-redux";
import {addDeck} from "../../actions/index";
import {updateDeck} from "../../helper/api";

class AddDeck extends Component {

  // noinspection JSUnusedGlobalSymbols
  static navigationOptions = {
    tabBarLabel: 'Add Deck',
    tabBarIcon: ({tintColor}) => (<Ionicons name='ios-speedometer' size={30} color={tintColor}/>)
  };

  state = {
    deckName: ''
  };

  handleInput = (input) => {
    this.setState({
      deckName: input
    })
  };

  handleSubmit = () => {
    const {deckName} = this.state;
    console.log('Will submit ' + deckName);
    if (deckName && deckName !== '') {
      this.setState({
        deckName: null
      });
      this.props.addDeck(deckName);
      updateDeck([], deckName);
      // TODO HHE Navigate to DECKS view
      // TODO HHE Logic to cancel adding a new deck
    }
  };

  render() {
    const {deckName} = this.state;
    return (<KeyboardAvoidingView behavior='padding' style={CoreStyles.flex}>
        <Text style={[CoreStyles.center, CoreStyles.text]}>
          Enter Name of new deck
        </Text>
        <TextInput value={deckName}
                   maxLength={20}
                   onSubmitEditing={this.handleSubmit}
                   onChangeText={this.handleInput} style={[CoreStyles.center, CoreStyles.textInput]}/>
        <TouchableButton onPress={this.handleSubmit} style={CoreStyles.primaryButton}>Submit new deck</TouchableButton>
      </KeyboardAvoidingView>
    )
  }
}

function mapStateToProps() {
  return {}
}

function mapDispatchToProps(dispatch) {
  return {
    addDeck: (deckName) => {
      dispatch(addDeck(deckName))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddDeck);






