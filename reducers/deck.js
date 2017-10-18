import {ADD_DECK} from '../actions';
import {RECEIVE_DECKS} from "../actions/index";

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
    default:
      return {...state}
  }
}
