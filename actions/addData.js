import {ADD_DECK_DATA} from "./types";

export const addData = (deckName, items) => {
  return {
    type: ADD_DECK_DATA,
    payload: {
      deckName,
      items
    }
  }
};
