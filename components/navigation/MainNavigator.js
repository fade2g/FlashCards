import Tabs from "./Tabs";
import {StackNavigator} from "react-navigation";
import DeckList from "../views/DeckList";

const MainNavigator = StackNavigator({
  Home: {
    screen: Tabs
  },
  Other: {
    screen: DeckList
  }
});


export default MainNavigator;
