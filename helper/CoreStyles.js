import {StyleSheet} from 'react-native';
import {black, green, primary_dark, primary_light, red, secondary_light, white} from "./colors";

const minorFontSize = 18;
const majorFontSize = 24;

function buttonFactory(color, backgroundColor, small = false) {
  return {
    color: color,
    backgroundColor: backgroundColor,
    margin: small ? 7 : 20,
    padding: small ? 3: 10,
    height: small ? 35 : 50,
    minWidth: small ? 100 : 200,
    borderRadius: 4,
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: minorFontSize,

    textAlign: 'center'
  }
}

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
  textMinor: {
    fontSize: minorFontSize,
    textAlign: 'center',
    paddingTop: 10,
    paddingBottom: 10
  },
  textInput: {
    fontSize: majorFontSize,
    textAlign: 'center',
    paddingTop: 15,
    paddingBottom: 15
  },
  textInputMultiline: {
    fontSize: minorFontSize,
    textAlign: 'center',
    paddingTop: 7,
    paddingBottom: 7
  },
  primaryButton: buttonFactory(secondary_light, primary_dark),
  deleteButton: buttonFactory(black, red),
  correctButton: buttonFactory(black, green, true),
  incorrectButton: buttonFactory(black, red, true),
  buttonIcon: {
    marginLeft: 50,
    marginRight: 50,
    padding: 50
  },
  deckCard: {
    padding: 20,
    margin: 20,
    minHeight: 170,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 4,
    backgroundColor: white,
    borderColor: primary_dark,
    borderWidth: 1,
    shadowRadius: 10,
    shadowOpacity: 0.8,
    shadowColor: 'rgba(0, 0,0,0.84)',
    shadowOffset: {
      width: 4,
      height: 4
    }
  }

});
