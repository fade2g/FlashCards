import {ADD_DECK, ADD_DECK_DATA, ADD_QUESTION, DELETE_DECK, RECEIVE_DECKS} from "./types";


export const receiveDecks = (decks) => {
  return {
    type: RECEIVE_DECKS,
    payload: decks
  }
};

export const addDeck = (deckName) => {
  return {
    type: ADD_DECK,
    payload: deckName
  }
};

export const addData = (deckName, items) => {
  return {
    type: ADD_DECK_DATA,
    payload: {
      deckName,
      items
    }
  }
};

export const deleteDeck = (deckName) => {
  return {
    type: DELETE_DECK,
    payload: deckName
  }
};

export const addQuestion = (deckName, question, answer) => {
  return {
    type: ADD_QUESTION,
    payload: {
      deckName,
      question,
      answer
    }
  }
};
