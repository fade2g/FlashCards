import React from 'react';
import {StatusBar, View} from "react-native";
import { Constants } from 'expo';


// noinspection JSUnusedLocalSymbols
export default function FlashStatusBar ({backgroundColor, ...props}) {
  return (
    <View style={{backgroundColor: backgroundColor, height: Constants.statusBarHeight}}>
      <StatusBar translucent backgroundColor={backgroundColor}/>
    </View>
  )
}
