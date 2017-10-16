import { StyleSheet} from 'react-native';
import {primary_light} from "./colors";

export const CoreStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: primary_light,
    alignItems: 'center',
    justifyContent: 'center',
  },
  center: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  flex: {
    flex: 1
  },
  text: {
    fontSize: 24,
    textAlign: 'center',
    paddingTop: 15,
    paddingBottom: 15
  },
  textInput: {
    fontSize: 24,
    textAlign: 'center',
    paddingTop: 15,
    paddingBottom: 15
  }

});
