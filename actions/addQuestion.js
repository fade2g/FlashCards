import {ADD_QUESTION} from "./types";

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
