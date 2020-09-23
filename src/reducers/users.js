import { RECEIVE_USERS } from "../actions/users";
import { SAVE_ANSWER, ADD_QUESTION } from "../actions/questions";

export default function users(state = {}, action) {
  switch (action.type) {
    case RECEIVE_USERS:
      return {
        ...state,
        ...action.users,
      };
    case ADD_QUESTION: {
      console.log("action in users", action);
      return {
        ...state,
        [action.question.author]: {
          ...state[action.question.author],
          questions: state[action.question.author].questions.concat([
            action.question.id,
          ]),
          //state[action.author].questions.concat([action.id])
        },
      };
    }
    case SAVE_ANSWER: {
      return {
        ...state,
        [action.authedUser]: {
          ...state[action.authedUser],
          answers: {
            ...state[action.authedUser].answers,
            [action.id]: action.answer,
          },
        },
      };
    }
    default:
      return state;
  }
}
