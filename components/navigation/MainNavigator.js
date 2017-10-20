import Tabs from "./Tabs";
import {StackNavigator} from "react-navigation";
import Deck from "../views/Deck";
import AddQuestion from "../views/AddQuestion";
import Quiz from "../views/Quiz";

const MainNavigator = StackNavigator({
  Home: {
    screen: Tabs
  },
  Deck: {
    screen: Deck,
    navigationOptions: ({navigation}) => ({
      title: `Deck \'${navigation.state.params.deckName}\'`
    })
  },
  AddQuestion: {
    screen: AddQuestion,
    navigationOptions: ({navigation}) => ({
      title: `Add card to deck \'${navigation.state.params.deckName}\'`
    })
  },
  Quiz: {
    screen: Quiz,
    navigationOptions: ({navigation}) => ({
      title: `Quiz of deck \'${navigation.state.params.deckName}\'`
    })
  }
});


export default MainNavigator;
