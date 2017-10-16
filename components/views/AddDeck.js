import React, {Component} from 'react';
import {KeyboardAvoidingView, Text, TextInput, View} from 'react-native'
import {CoreStyles} from "../../helper/CoreStyles";
import {Ionicons} from "@expo/vector-icons";

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
    // TODO HHE Implement logic to submit input and cleat the state
    //          Note: Implement a way to cancel submit as well...
    console.log('Will submit ' + this.state.deckName);
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
    </KeyboardAvoidingView>)
  }
}

export default AddDeck;






