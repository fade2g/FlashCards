import React, {Component} from 'react';
import {Text, View} from 'react-native'
import {connect} from "react-redux";
import TextButton from "../TextButton";
import {CoreStyles} from "../../helper/CoreStyles";
import TouchableButton from "../TouchableButton";
import {StyleSheet} from 'react-native';


function FeedbackScreen({onRestart, onBack, correct, total}) {
  const incorrectCounter = total - correct;
  return (
    <View>
      <Text style={CoreStyles.textMinor}>These are your stats</Text>
      <Text style={CoreStyles.text}>
        Correct: {correct} ({Math.round(correct / total * 100, 1)}%)
      </Text>
      <Text style={CoreStyles.text}>
        Incorrect: {incorrectCounter} ({Math.round(incorrectCounter / total * 100, 1)}%)
      </Text>
      <TouchableButton onPress={onRestart}
                       style={CoreStyles.primaryButton}>Restart</TouchableButton>
      <TouchableButton onPress={onBack}
                       style={CoreStyles.primaryButton}>Back to deck</TouchableButton>
    </View>
  )
}

class Quiz extends Component {

  state = {
    showAnswer: false,
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
        correctCounter: correct ? state.correctCounter + 1 : state.correctCounter,
        showAnswer: false
      }
    });
  };

  handleRestart = () => {
    this.setState({
      questionIndex: 0,
      showAnswer: false,
      correctCounter: 0
    })
  };

  handleBack = () => {
    this.props.navigation.goBack();
  };

  render() {
    const {deck, showAnswer, questionIndex, correctCounter} = this.state;

    if (deck.length === 0) {
      return null;
    }

    if (questionIndex >= deck.length) {
      return (<FeedbackScreen
        onRestart={this.handleRestart}
        onBack={this.handleBack}
        total={deck.length}
        correct={correctCounter}
      />)
    }

    const {question, answer} = deck[questionIndex];
    return (<View>
      <Text style={[CoreStyles.textMinor, styles.progress]}>{questionIndex + 1} / {deck.length}</Text>
      <Text style={CoreStyles.text}>{showAnswer ? answer : question}</Text>
      <TextButton onPress={this.handleFlip}>Show {showAnswer ? 'Question' : 'Answer'}</TextButton>
      <TouchableButton onPress={() => this.handleFeedback(true)}
                       style={CoreStyles.correctButton}>Correct</TouchableButton>
      <TouchableButton onPress={() => this.handleFeedback(false)}
                       style={CoreStyles.incorrectButton}>Incorrect</TouchableButton>
    </View>)
  }
}

const styles = StyleSheet.create({
  progress: {
    textAlign: 'right',
    marginRight: 20
  }
});

function mapStateToProps({decks}) {
  return {
    decks
  }
}

export default connect(mapStateToProps)(Quiz);
