import React from 'react';
import {secondary_light, tertiary_light} from "../helper/colors";
import {Text, TouchableOpacity} from "react-native";
import { StyleSheet} from 'react-native';

export default function TouchableButton({children, onPress, style = {}})  {
  return (
    <TouchableOpacity onPress={onPress}>
      <Text style={[styles.reset, style]}>{children}</Text>
    </TouchableOpacity>
  )
};

const styles = StyleSheet.create({
  reset: {
    textAlign: 'center',
    color: secondary_light
  }
});
