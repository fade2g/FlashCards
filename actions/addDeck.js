import {ADD_DECK} from "./types";

export const addDeck = (deckName) => {
  return {
    type: ADD_DECK,
    payload: deckName
  }
};
