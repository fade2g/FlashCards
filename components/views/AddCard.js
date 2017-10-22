import React, {Component} from 'react';
import {KeyboardAvoidingView, ScrollView, TextInput} from 'react-native'
import {connect} from "react-redux";
import {addCard} from "../../actions/";
import TouchableButton from "../TouchableButton";
import {CoreStyles} from "../../helper/CoreStyles";
import {addCardToStorage} from "../../helper/api";

class AddCard extends Component {

  state = {
    question: '',
    answer: ''
  };

  handleChangeQuestion = (question) => {
    this.setState({question})
  };

  handleChangeAnswer = (answer) => {
    this.setState({answer})
  };

  handleSubmit = () => {
    const deckName = this.props.navigation.state.params.deckName;
    const {question, answer} = this.state;
    if (deckName && question !== '' && answer !== '') {
      this.props.addCard(deckName, question, answer);
      addCardToStorage(deckName, question, answer);
      this.props.navigation.goBack();
    }
  };

  render() {
    const {question, answer} = this.state;
    return (
      <KeyboardAvoidingView behavior='padding'>
        <ScrollView>
          <TextInput
            placeholder="Question"
            value={question}
            maxLength={200}
            multiline={true}
            numberOfLines={2}
            maxHeigh={2}
            autoGrow={true}
            onChangeText={this.handleChangeQuestion} style={[CoreStyles.center, CoreStyles.textInputMultiline]}/>
          <TextInput
            placeholder="Answer"
            value={answer}
            maxLength={200}
            multiline={true}
            numberOfLines={2}
            maxHeigh={2}
            autoGrow={true}
            onChangeText={this.handleChangeAnswer} style={[CoreStyles.center, CoreStyles.textInputMultiline]}/>
          <TouchableButton
            onPress={this.handleSubmit}
            style={CoreStyles.primaryButton}>
            Submit Card
          </TouchableButton>
        </ScrollView>
      </KeyboardAvoidingView>)
  }
}

function mapStateToProps() {
  return {}
}

function mapDispatchToProps(dispatch) {
  return {
    addCard: (deckName, question, answer) => {
      dispatch(addCard(deckName, question, answer))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddCard);
