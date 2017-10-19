import Tabs from "./Tabs";
import {StackNavigator} from "react-navigation";
import Deck from "../views/Deck";

const MainNavigator = StackNavigator({
  Home: {
    screen: Tabs
  },
  Deck: {
    screen: Deck,
    navigationOptions: ({navigation}) => ({
      title: `Deck ${navigation.state.params.deckName}`
    })
  }
});


export default MainNavigator;
