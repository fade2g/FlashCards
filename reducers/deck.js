import {ADD_DECK} from '../actions';
import {DELETE_DECK, RECEIVE_DECKS} from "../actions/index";

export function deck(state = {}, action) {
  const {payload} = action;
  switch (action.type) {
    case ADD_DECK:
      return {
        ...state,
        [payload]: []
      };
    case RECEIVE_DECKS:
      return payload;
    case DELETE_DECK: {
      let temp = {...state};
      delete temp[payload];
      return temp;
    }
    default:
      return {...state}
  }
}
