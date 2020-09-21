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
        [action.question.id]: question,
      };
    case SAVE_ANSWER:
      //  const { authedUser, id, answer } = action;
      return {
        ...state,
        [action.id]: {
          ...state[action.qid],
          [action.selected]: {
            ...state[action.qid][action.selected],
            votes: state[action.qid][action.selected].votes.concat([
              action.authedUser,
            ]),
          },
        },
      };
    default:
      return state;
  }
}
