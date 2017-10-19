import Tabs from "./Tabs";
import {StackNavigator} from "react-navigation";
import Deck from "../views/Deck";

const MainNavigator = StackNavigator({
  Home: {
    screen: Tabs
  },
  Other: {
    screen: Deck
  }
});


export default MainNavigator;
