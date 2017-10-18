import {StyleSheet} from 'react-native';
import {primary_dark, primary_light} from "./colors";

const minorFontSize = 18;
const majorFontSize = 24;

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
    fontSize: majorFontSize,
    textAlign: 'center',
    paddingTop: 15,
    paddingBottom: 15
  },
  textInput: {
    fontSize: majorFontSize,
    textAlign: 'center',
    paddingTop: 15,
    paddingBottom: 15
  },
  primaryButton: {
    backgroundColor: primary_dark,
    paddingLeft: 30,
    paddingRight: 30,
    height: 45,
    borderRadius: 4,
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: minorFontSize
  }

});
