import {ADD_DECK} from '../actions';
import {ADD_DECK_DATA, ADD_QUESTION, DELETE_DECK, RECEIVE_DECKS} from "../actions/index";

export function decks(state = {}, action) {
  const {payload} = action;
  switch (action.type) {
    case ADD_DECK:
      return {
        ...state,
        [payload]: []
      };
    case ADD_DECK_DATA:
      console.log('Will add data', payload.deckName);
      return {
        ...state,
        [payload.deckName]: payload.items
      };
    case RECEIVE_DECKS:
      return payload;
    case DELETE_DECK: {
      let temp = {...state};
      delete temp[payload];
      return temp;
    }
    case ADD_QUESTION: {
      return {
        ...state,
        [payload.deckName]: state[payload.deckName].concat(
          {question: payload.question, answer: payload.answer}
        )
      }
    }
    default:
      return {...state}
  }
}
