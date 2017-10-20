import React, {Component} from 'react';
import {Text, View} from 'react-native'
import {connect} from "react-redux";
import TextButton from "../TextButton";
import {CoreStyles} from "../../helper/CoreStyles";
import TouchableButton from "../TouchableButton";

class Quiz extends Component {

  state = {
    showAnswer: false,
    showSummary: false,
    questionIndex: 0,
    correctCounter: 0,
    deck: []
  };

  componentDidMount() {
    const deckName = this.props.navigation.state.params.deckName;
    const deck = this.props.decks[deckName];
    if (deck && deck.length > 0) {
      this.setState({deck})
    }
  }


  handleFlip = () => {
    this.setState((state) => {
      return {
        showAnswer: !state.showAnswer
      }
    })
  };

  handleFeedback = (correct) => {
    this.setState((state) => {
      return {
        questionIndex: state.questionIndex + 1,
        correctCounter: correct ? state.correctCounter + 1 : state.correctCounter
      }
    });
  };

  render() {
    const {deck, showAnswer, questionIndex, correctCounter} = this.state;

    if (deck.length === 0) {
      return null;
    }

    console.log('index: ' + questionIndex + 'deckLength' + deck.length);
    if (questionIndex >= deck.length) {
      const incorrectCounter = deck.length - correctCounter;
      return (
        <View>
          <Text style={CoreStyles.textMinor}>These are your stats</Text>
          <Text style={CoreStyles.text}>
            Correct: {correctCounter} ({Math.round(correctCounter / deck.length * 100, 1)}%)
          </Text>
          <Text style={CoreStyles.text}>
            Incorrect: {incorrectCounter} ({Math.round(incorrectCounter / deck.length * 100, 1)}%)
          </Text>
        </View>
      )
    }

    const {question, answer} = deck[questionIndex];
    return (<View>
      <Text style={CoreStyles.textMinor}>{questionIndex + 1} / {deck.length}</Text>
      <Text style={CoreStyles.text}>{showAnswer ? answer : question}</Text>
      <TextButton onPress={this.handleFlip}>Show {showAnswer ? 'Question' : 'Answer'}</TextButton>
      <TouchableButton onPress={() => this.handleFeedback(true)}
                       style={CoreStyles.correctButton}>Correct</TouchableButton>
      <TouchableButton onPress={() => this.handleFeedback(false)}
                       style={CoreStyles.incorrectButton}>Incorrect</TouchableButton>
    </View>)
  }
}

function mapStateToProps({decks}) {
  return {
    decks
  }
}

export default connect(mapStateToProps)(Quiz);
