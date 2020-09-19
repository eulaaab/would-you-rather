import {
  RECEIVE_QUESTIONS,
  ADD_QUESTION,
  SAVE_ANSWER,
} from "../actions/questions";

export default function questions(state = {}, action) {
  switch (action.type) {
    case RECEIVE_QUESTIONS:
      return {
        ...state,
        ...action.questions,
      };
    case ADD_QUESTION:
      const { question } = action;
      return {
        ...state,
        [question.id]: question,
      };
    case SAVE_ANSWER:
      const { authedUser, qId, answer } = action;
      return {
        ...state,
        [qId]: {
          ...state[qId],
          [action.answer]: {
            ...state[qId][answer],
            votes: state[qId][answer].votes.concat([authedUser]),
          },
        },
      };
    default:
      return state;
  }
}
