import { saveQuestion, saveQuestionAnswer } from "../utils/api";
export const RECEIVE_QUESTIONS = "RECEIVE QUESTIONS";
export const ADD_QUESTION = "ADD QUESTION";
export const ADD_ANSWER_QUESTION = "ADD_ANSWER_QUESTION";

export function receiveQuestions(questions) {
  return {
    type: RECEIVE_QUESTIONS,
    questions,
  };
}

export function addQuestion(question) {
  return {
    type: ADD_QUESTION,
    question,
  };
}

//two text values payloads - send data from your application to your store
export function handleAddQuestion(optionOneText, optionTwoText) {
  return (dispatch, getState) => {
    const { authedUser } = getState();
    return saveQuestion({
      optionOneText,
      optionTwoText,
      author: authedUser,
    }).then((question) => dispatch(addQuestion(question)));
  };
}
export function addQuestionAnswer(authedUser, qId, answer) {
  return {
    type: ADD_ANSWER_QUESTION,
    authedUser,
    qId,
    answer,
  };
}

export function handleAddQuestionAnswer(qId, answer) {
  return (dispatch, getState) => {
    const { authedUser } = getState();
    return saveQuestionAnswer({
      authedUser,
      qId,
      answer,
    }).then(dispatch(addQuestionAnswer(authedUser, qId, answer)));
  };
}
