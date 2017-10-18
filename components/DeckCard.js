import React from 'react';
import {CoreStyles} from "../helper/CoreStyles";
import {Text, TouchableOpacity} from "react-native";

export default function DeckCard({deckName, numberOfCards, onPress})  {
  return (
    <TouchableOpacity onPress={onPress} style={CoreStyles.deckCard}>
      <Text style={CoreStyles.text}>{deckName}</Text>
      <Text>{numberOfCards} cards</Text>
    </TouchableOpacity>
  )
};
