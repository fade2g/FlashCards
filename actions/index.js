export const RECEIVE_DECKS = 'RECEIVE_DECKS';
export const ADD_DECK = 'ADD_DECK';
export const DELETE_DECK = 'DELETE_DECK';
export const ADD_QUESTION = 'ADD_QUESTION';
export const ADD_DECK_DATA = 'ADD_DECK_DATA';

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
