export const RECEIVE_DECKS = 'RECEIVE_DECKS';
export const ADD_DECK = 'ADD_DECK';
export const DELETE_DECK = 'DELETE_DECK';

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

export const deleteDeck = (deckName) => {
  return {
    type: DELETE_DECK,
    payload: deckName
  }
};
