import { saveQuestion, saveQuestionAnswer } from "../utils/api";
export const RECEIVE_QUESTIONS = "RECEIVE QUESTIONS";
export const ADD_QUESTION = "ADD QUESTION";
export const SAVE_ANSWER = "SAVE_ANSWER";

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

//two text values payloads - send data from your application to your store - new question async action creator function
export function handleAddNewQuestion(optionOneText, optionTwoText) {
  return (dispatch, getState) => {
    const { authedUser } = getState();
    return saveQuestion({
      optionOneText,
      optionTwoText,
      author: authedUser,
    }).then((question) => dispatch(addQuestion(question)));
  };
}

//save the answer action creator function
export function saveAnswer(authedUser, qId, answer) {
  return {
    type: SAVE_ANSWER,
    authedUser,
    qId,
    answer,
  };
}

//action to take the answered value from the unanaswered question
export function handleSaveQuestionAnswer(qId, answer) {
  return (dispatch, getState) => {
    const { authedUser } = getState();
    //then save it.
    return saveQuestionAnswer({
      authedUser,
      qId,
      answer,
    }).then(dispatch(saveQuestionAnswer(authedUser, qId, answer)));
  };
}
