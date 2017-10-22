import {DELETE_DECK} from "./types";

export const deleteDeck = (deckName) => {
  return {
    type: DELETE_DECK,
    payload: deckName
  }
};
